import { Component, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUserPlan, SimActivationService } from '@ztarmobile/zwp-service-backend';
import { ACTIVATION_ROUTE_URLS, ROUTE_URLS } from 'src/app/app.routes.names';
import { AppState } from 'src/app/app.service';
import { CUSTOMER_CARE_NUMBER } from 'src/environments/environment';
import { MetaService } from 'src/services/meta-service.service';
import { ToastrHelperService } from 'src/services/toast-helper.service';

@Component({
  selector: 'app-activate-plan',
  templateUrl: './activate-plan.component.html',
  styleUrls: ['./activate-plan.component.scss']
})
export class ActivatePlanComponent {
  public pendingPlans: IUserPlan;
  public userPlans: IUserPlan[];
  public activateForm: FormGroup;
  public prefundedPlanId: string;
  public processingRequest = false;
  public validationFailed = false;
  public isPrefundedSIM = false;
  public customerCareNumber = CUSTOMER_CARE_NUMBER;

  constructor(private router: Router,
              private simActivationService: SimActivationService,
              private appState: AppState,
              private metaService: MetaService,
              private formBuilder: FormBuilder,
              private toastHelper: ToastrHelperService) {
    if (sessionStorage.getItem('activation_step') !== 'step2') {
      this.router.navigate([`${ACTIVATION_ROUTE_URLS.BASE}/${ACTIVATION_ROUTE_URLS.CHOOSE_SIM_SOURCE}`]);
    }
    this.activateForm = formBuilder.group({
      code: ['', Validators.compose([Validators.required, Validators.pattern('^[A-Z]+\\d{6}|\\d{7}$')])]
    });
    this.metaService.createCanonicalUrl();
  }


  public checkSimActivationCode(): void {
    this.appState.loading = true;
    this.processingRequest = true;
    this.simActivationService.checkActivationCodeWithNoAuth(this.activateForm.get('code').value)
      .then((sim) => {
        if (!!sim) {
          sessionStorage.setItem('activation', JSON.stringify(sim));
        }
        this.appState.loading = false;
        this.processingRequest = false;
        const params = {};
        params[ACTIVATION_ROUTE_URLS.PARAMS.ACTIVATION_CODE] = this.activateForm.get('code').value;
        params[ROUTE_URLS.PARAMS.NETWORK] = sim.network;
        sessionStorage.setItem('activation_step', 'step3');
        this.router.navigate([`${ACTIVATION_ROUTE_URLS.BASE}/${ACTIVATION_ROUTE_URLS.CHECK_PHONE}`, params]);
      }).catch((error) => {
        // Failed to detect the sim by activation code
        this.processingRequest = false;
        this.appState.loading = false;
        this.validationFailed = true;
        this.toastHelper.showAlert(error.message);
      });
  }
  @HostListener('window:popstate', ['$event'])
  onPopState(event): void {
    event.preventDefault();
    sessionStorage.setItem('activation_step', 'step1');
  }
}