import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MetaService } from '../../../../services/meta-service.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { PageScrollService } from 'ngx-page-scroll-core';
import { UserDeviceService } from '@ztarmobile/zwp-service-backend';
import { ContentfulService } from '../../../../services/contentful.service';
import { ENDPOINT_URL } from '../../../../environments/environment';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrHelperService } from '../../../../services/toast-helper.service';
import { SUPPORT_ROUTE_URLS } from '../../../app.routes.names';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnDestroy, OnInit {
  public questionIdParam: string;
  public mdn: string;
  public network: string;
  public SupportData: any;
  public category = 'support';
  public isReload = false;
  public isCopied = false;
  public processingRequest = false;
  public validMDN = false;
  public collapsed = false;
  private routerSubscription: Subscription;

  constructor(private metaService: MetaService,
              private location: Location,
              private pageScrollService: PageScrollService,
              private userDeviceService: UserDeviceService,
              private contentful: ContentfulService,
              private toastHelper: ToastrHelperService,
              private router: Router,
              private clipboardService: ClipboardService) { }

  ngOnInit(): void {
        this.questionIdParam = this.router.url.split('/')[5];
        if (!!this.questionIdParam){
        const hashId = '#' + this.questionIdParam;
        setTimeout(() => {
          this.pageScrollService.scroll({
            document,
            scrollTarget: hashId,
            scrollOffset: 150,
            speed: 500
          });
        }, 1000);
      }
        this.showData();
    }
  ngOnDestroy(): void {
    if (!!this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  public toggleActive(questionId, carrierID, answerId, copy?): void {
    this.network = carrierID === 'tmo' ? 'tmo' : 'att';
    if (this.questionIdParam === questionId && !this.collapsed &&!copy) {
      this.location.replaceState(`${SUPPORT_ROUTE_URLS.BASE}/${SUPPORT_ROUTE_URLS.FAQS}/${this.category}/${this.network}`);
      this.metaService.createCanonicalUrl(`${ENDPOINT_URL}/${SUPPORT_ROUTE_URLS.BASE}/${SUPPORT_ROUTE_URLS.FAQS}/${this.category}/${this.network}`);
      this.questionIdParam = 'q0';
    } else {
      this.questionIdParam = questionId;
      this.collapsed = false;
      this.location.replaceState(`${SUPPORT_ROUTE_URLS.BASE}/${SUPPORT_ROUTE_URLS.FAQS}/${this.category}/${this.network}/${this.questionIdParam}`);
      this.metaService.createCanonicalUrl(`${ENDPOINT_URL}/${SUPPORT_ROUTE_URLS.BASE}/${SUPPORT_ROUTE_URLS.FAQS}/${this.category}/${this.network}/${this.questionIdParam}`);
      this.callRichText(answerId);
    }
    if (!!copy && this.questionIdParam === questionId){
      const url = window.location.host + this.location.path();
      this.clipboardService.copy(url);
      this.isCopied = true;
      setTimeout(() => {
        this.isCopied = false;
      }, 1500);
   }   
  }
  public checkMdn(mdn): void {
    this.processingRequest = true;
    this.userDeviceService.checkDeviceNetworkByMdn(mdn).then((result) => {
      this.validMDN = true;
      this.network = result.network;
      this.network === 'att' ? 
      this.SupportData = this.contentful.getContentByCarrierId('supportFaqs', 'att') :
      this.SupportData = this.contentful.getContentByCarrierId('supportFaqs', 'tmo');
      this.location.replaceState(`${SUPPORT_ROUTE_URLS.BASE}/${SUPPORT_ROUTE_URLS.FAQS}/${this.category}/${this.network}`);
      this.metaService.createCanonicalUrl(`${ENDPOINT_URL}/${SUPPORT_ROUTE_URLS.BASE}/${SUPPORT_ROUTE_URLS.FAQS}/${this.category}/${this.network}`);
    }, (error) => {
      this.validMDN = false;
      this.toastHelper.showAlert(error.message || error);
      this.processingRequest = false;
    });
  }
  public copy(copy, reload , questionId?, carrierID?, answerId?){
    if (!!copy && !!questionId && !!carrierID && !!answerId && !reload){
      this.toggleActive(questionId, carrierID, answerId, copy);
    }
   else if (!!copy && !!reload){
    const url = window.location.host + this.location.path();
    this.clipboardService.copy(url);
    this.isReload = false;
    this.isCopied = true;
    setTimeout(() => {
        this.isCopied = false;
      }, 1500);
   }   
  }
  private showData(): void {
    this.network = this.router.url.split('/')[4];
    this.questionIdParam = this.router.url.split('/')[5];
    if (!!this.network) {
      this.validMDN = true;
      this.SupportData = this.contentful.getContentByCarrierId('supportFaqs', this.network);
      this.location.replaceState(`${SUPPORT_ROUTE_URLS.BASE}/${SUPPORT_ROUTE_URLS.FAQS}/${this.category}/${this.network}`);
      this.metaService.createCanonicalUrl(`${ENDPOINT_URL}/${SUPPORT_ROUTE_URLS.BASE}/${SUPPORT_ROUTE_URLS.FAQS}/${this.category}/${this.network}`);
      if (!!this.questionIdParam){
      this.isReload = true;
      this.location.replaceState(`${SUPPORT_ROUTE_URLS.BASE}/${SUPPORT_ROUTE_URLS.FAQS}/${this.category}/${this.network}/${this.questionIdParam}`);
      this.metaService.createCanonicalUrl(`${ENDPOINT_URL}/${SUPPORT_ROUTE_URLS.BASE}/${SUPPORT_ROUTE_URLS.FAQS}/${this.category}/${this.network}/${this.questionIdParam}`);
      this.contentful.getAnswerIdByQstId('questions', this.questionIdParam).subscribe(val =>
        this.callRichText(val['answerId']));
    }
    }
  }
  private callRichText(id) {
    this.contentful.getRichText('questions', id);
  }
}
