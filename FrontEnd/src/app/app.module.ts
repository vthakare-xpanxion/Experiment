import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { RegisterComponent } from './register/register.component';
import { AuthenticationService } from './services/authentication.service';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminProductsComponent } from './Admin/admin-products/admin-products.component';
import { AddProductComponent } from './Admin/admin-products/add-product/add-product.component';
import { EditProductComponent } from './Admin/admin-products/edit-product/edit-product.component';
import { AddressComponent } from './address/address.component';
import { EditAdressComponent } from './address/edit-adress/edit-adress.component';
import { AddAddressComponent } from './address/add-address/add-address.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { PlaceAnOrderComponent } from './place-an-order/place-an-order.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPassComponent } from './reset-pass/reset-pass.component';
import { CurrentOrdersComponent } from './Admin/current-orders/current-orders.component';
import { DeliveredOrdersComponent } from './Admin/delivered-orders/delivered-orders.component';
import { DeactiveProductListComponent } from './Admin/deactive-product-list/deactive-product-list.component';
import { OrdersHistoryComponent } from './orders-history/orders-history.component';



@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginComponent,
    UserDetailsComponent,
    PortfolioComponent,
    RegisterComponent,
    HomepageComponent,
    AdminProductsComponent,
    AddProductComponent,
    EditProductComponent,
    AddressComponent,
    EditAdressComponent,
    AddAddressComponent,
    ProfileComponent,
    ProductDetailsComponent,
    AddToCartComponent,
    PlaceAnOrderComponent,
    OrderConfirmationComponent,
    SearchPageComponent,
    EditProfileComponent,
    ForgetPasswordComponent,
    ResetPassComponent,
    CurrentOrdersComponent,
    DeliveredOrdersComponent,
    DeactiveProductListComponent,
    OrdersHistoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
 
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  
  ],
  providers: [],
  bootstrap: [LandingPageComponent]
})
export class AppModule { }
