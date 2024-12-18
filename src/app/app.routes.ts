import { Routes } from '@angular/router';
import { HomeComponent } from './NiceAdminComponent/home/home.component';
import { HeaderComponent } from './NiceAdminComponent/header/header.component';
import { FooterComponent } from './NiceAdminComponent/footer/footer.component';
import { SidebarComponent } from './NiceAdminComponent/sidebar/sidebar.component';
import { MainComponent } from './NiceAdminComponent/main/main.component';
import { ComponentsAlertsComponent } from './NiceAdminComponent/components-alerts/components-alerts.component';
import { ComponentsAccordionComponent } from './NiceAdminComponent/components-accordion/components-accordion.component';
import { ComponentsBadgesComponent } from './NiceAdminComponent/components-badges/components-badges.component';
import { ComponentsBreadcrumbsComponent } from './NiceAdminComponent/components-breadcrumbs/components-breadcrumbs.component';
import { ComponentsButtonsComponent } from './NiceAdminComponent/components-buttons/components-buttons.component';
import { ComponentsCardsComponent } from './NiceAdminComponent/components-cards/components-cards.component';
import { ComponentsCarouselComponent } from './NiceAdminComponent/components-carousel/components-carousel.component';
import { ComponentsListGroupComponent } from './NiceAdminComponent/components-list-group/components-list-group.component';
import { ComponentsModalComponent } from './NiceAdminComponent/components-modal/components-modal.component';
import { ComponentsTabsComponent } from './NiceAdminComponent/components-tabs/components-tabs.component';
import { ComponentsPaginationComponent } from './NiceAdminComponent/components-pagination/components-pagination.component';
import { ComponentsProgressComponent } from './NiceAdminComponent/components-progress/components-progress.component';
import { ComponentsSpinnersComponent } from './NiceAdminComponent/components-spinners/components-spinners.component';
import { ComponentsTooltipsComponent } from './NiceAdminComponent/components-tooltips/components-tooltips.component';
import { FormsElementsComponent } from './NiceAdminComponent/forms-elements/forms-elements.component';
import { FormsLayoutsComponent } from './NiceAdminComponent/forms-layouts/forms-layouts.component';
import { FormsEditorsComponent } from './NiceAdminComponent/forms-editors/forms-editors.component';
import { FormsValidationComponent } from './NiceAdminComponent/forms-validation/forms-validation.component';
import { TablesGeneralComponent } from './NiceAdminComponent/tables-general/tables-general.component';
import { TablesDataComponent } from './NiceAdminComponent/tables-data/tables-data.component';
import { ChartsChartjsComponent } from './NiceAdminComponent/charts-chartjs/charts-chartjs.component';
import { ChartsApexchartsComponent } from './NiceAdminComponent/charts-apexcharts/charts-apexcharts.component';
import { ChartsEchartsComponent } from './NiceAdminComponent/charts-echarts/charts-echarts.component';
import { IconsBootstrapComponent } from './NiceAdminComponent/icons-bootstrap/icons-bootstrap.component';
import { IconsRemixComponent } from './NiceAdminComponent/icons-remix/icons-remix.component';
import { IconsBoxiconsComponent } from './NiceAdminComponent/icons-boxicons/icons-boxicons.component';
import { UsersProfileComponent } from './NiceAdminComponent/users-profile/users-profile.component';
import { PagesFaqComponent } from './NiceAdminComponent/pages-faq/pages-faq.component';
import { PagesContactComponent } from './NiceAdminComponent/pages-contact/pages-contact.component';
import { PagesRegisterComponent } from './NiceAdminComponent/pages-register/pages-register.component';
import { PagesLoginComponent } from './NiceAdminComponent/pages-login/pages-login.component';
import { PagesError404Component } from './NiceAdminComponent/pages-error-404/pages-error-404.component';
import { PagesBlankComponent } from './NiceAdminComponent/pages-blank/pages-blank.component';

export const routes: Routes = [

  {path : '', component : HomeComponent ,title : 'Clinc Dental Management Software AKSS',pathMatch: 'full'},
  {path : 'header', component : HeaderComponent },
  {path : 'footer', component : FooterComponent },
  {path : 'sidebar', component : SidebarComponent},
  {path : 'main', component : MainComponent},
  {path : 'componentsAlerts', component : ComponentsAlertsComponent},
  {path : 'componentsAccordion', component :ComponentsAccordionComponent},
  {path : 'componentsBadges', component : ComponentsBadgesComponent},
  {path : 'componentsBreadcrumbs', component : ComponentsBreadcrumbsComponent},
  {path : 'componentsButtons', component : ComponentsButtonsComponent},
  {path : 'componentsCards', component : ComponentsCardsComponent},
  {path : 'componentsCarousel', component : ComponentsCarouselComponent},
  {path : 'componentsListGroup', component : ComponentsListGroupComponent},
  {path : 'componentsModal', component : ComponentsModalComponent},
  {path : 'componentsTabs', component : ComponentsTabsComponent},
  {path : 'componentsPagination', component : ComponentsPaginationComponent},
  {path : 'componentsProgress', component : ComponentsProgressComponent},
  {path : 'componentsSpinners', component : ComponentsSpinnersComponent},
  {path : 'componentsTooltips', component : ComponentsTooltipsComponent},
  {path : 'formsElements', component : FormsElementsComponent},
  {path : 'formsLayouts', component : FormsLayoutsComponent},
  {path : 'formsEditors', component :  FormsEditorsComponent},
  {path : 'formsValidation', component :FormsValidationComponent},
  {path : 'tablesGeneral', component : TablesGeneralComponent},
  {path : 'tablesData', component : TablesDataComponent},
  {path : 'chartsChartjs', component : ChartsChartjsComponent},
  {path : 'chartsApexcharts' , component : ChartsApexchartsComponent},
  {path : 'chartsEcharts', component : ChartsEchartsComponent},
  {path : 'iconsBootstrap', component  : IconsBootstrapComponent},
  {path : 'iconsRemix', component : IconsRemixComponent},
  {path : 'iconsBoxicons', component : IconsBoxiconsComponent},
  {path : 'usersProfile', component : UsersProfileComponent},
  {path : 'pagesFaq', component : PagesFaqComponent},
  {path : 'pagesContact', component : PagesContactComponent},
  {path : 'register', component : PagesRegisterComponent, title : 'Register', pathMatch: 'full'},
  {path : 'login', component : PagesLoginComponent, title : 'Login' ,pathMatch: 'full'},
  {path : 'pagesError404', component : PagesError404Component, pathMatch: 'full'},
  {path : 'pagesBlank', component : PagesBlankComponent},
  {path: '**', component: PagesError404Component ,pathMatch: 'full'}

];
