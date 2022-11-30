import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivationRoutingModule } from './activation-routing.module';
import { ActivatePlanComponent } from './activate-plan/activate-plan.component';
import { CompatibilityMainComponent } from './activation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WidgetsModule } from 'src/widgets/widgets.module';
import { ActivateSimComponent } from './activate-sim/activate-sim.component';
import { ActivateCurrentNumberComponent } from './activate-sim/activate-current-number/activate-current-number.component';
import { ActivateNewNumberComponent } from './activate-sim/activate-new-number/activate-new-number.component';
import { ActivationCheckCompatibilityComponent } from './activation-check-compatibility/activation-check-compatibility.component';
import { ActivationSummaryComponent } from './activation-summary/activation-summary.component';
import { CheckCompatibilityResultComponent } from './check-compatibility-result/check-compatibility-result.component';
import { ChooseActivationPathComponent } from './choose-activation-path/choose-activation-path.component';
import { ChoosePlanPathComponent } from './choose-plan-path/choose-plan-path.component';
import { ChooseSimPathComponent } from './choose-sim-path/choose-sim-path.component';
import { ChooseSimSourceComponent } from './choose-sim-source/choose-sim-source.component';
import { ChooseTrialPathComponent } from './choose-trial-path/choose-trial-path.component';
import { NoSIMComponent } from './no-sim/no-sim.component';
import { ReplaceResultComponent } from './replace-result/replace-result.component';
import { ReplaceSimComponent } from './replace-sim/replace-sim.component';
import { SIMArrivalComponent } from './sim-arrival/sim-arrival.component';
import { SIMCheckComponent } from './sim-check/sim-check.component';
import { NguiAutoCompleteModule } from '@ngui/auto-complete';


@NgModule({
  declarations: [ActivatePlanComponent,
    CompatibilityMainComponent,
    ActivateSimComponent,
    ActivateCurrentNumberComponent,
    ActivateNewNumberComponent,
    ActivationCheckCompatibilityComponent,
    ActivationSummaryComponent,
    CheckCompatibilityResultComponent,
    ChooseActivationPathComponent,
    ChoosePlanPathComponent,
    ChooseSimPathComponent,
    ChooseSimSourceComponent,
    ChooseTrialPathComponent,
    NoSIMComponent,
    ReplaceResultComponent,
    ReplaceSimComponent,
    SIMArrivalComponent,
    SIMCheckComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ActivationRoutingModule,
    WidgetsModule,
    NguiAutoCompleteModule
  ]
})
export class ActivationModule { }