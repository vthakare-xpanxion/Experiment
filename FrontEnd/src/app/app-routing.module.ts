import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminProductsComponent } from './Admin/admin-products/admin-products.component';
import { AddProductComponent } from './Admin/admin-products/add-product/add-product.component';
import { EditProductComponent } from './Admin/admin-products/edit-product/edit-product.component';
import { AddressComponent } from './address/address.component';
import { AddAddressComponent } from './address/add-address/add-address.component';
import { EditAdressComponent } from './address/edit-adress/edit-adress.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { PlaceAnOrderComponent } from './place-an-order/place-an-order.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPassComponent } from './reset-pass/reset-pass.component';
import { CurrentOrdersComponent } from './Admin/current-orders/current-orders.component';
import { DeliveredOrdersComponent } from './Admin/delivered-orders/delivered-orders.component';
import { DeactiveProductListComponent } from './Admin/deactive-product-list/deactive-product-list.component';
import { OrdersHistoryComponent } from './orders-history/orders-history.component';



const routes: Routes = [    
    //these are customer path  
    {path:'', component:HomepageComponent},
    {path:'home', component:HomepageComponent},
    {path:'productdtails/:pid', component:ProductDetailsComponent},
    {path:'addtocart', component:AddToCartComponent},
    {path:'orderConfirm', component:OrderConfirmationComponent},
    {path:'currentOrders', component:PlaceAnOrderComponent},
    {path:'login', component:LoginComponent},
    {path:'forgetPass', component:ForgetPasswordComponent},
    {path:'resetpass', component:ResetPassComponent},
    {path:'register', component:RegisterComponent},
   
    //search
    {path:'search/category/:cattag', component:SearchPageComponent},
    {path:'search/:tag', component:SearchPageComponent},
    // {path:'userdetails/:id', component:UserDetailsComponent},
    // {path:'portfolio', component:PortfolioComponent},
    //user
    {path:'profile', component:ProfileComponent},
    {path:'editprofile', component:EditProfileComponent},
    {path:'address', component:AddressComponent},
    {path:'addAddress', component:AddAddressComponent},
    {path:'addAddress/from/:id', component:AddAddressComponent},
    {path:'editAddress/:aid', component:EditAdressComponent},
    {path:'orderHistory', component:OrdersHistoryComponent},
    //these are admins path 
    {path:'AdminProducts', component:AdminProductsComponent},
    {path:'addProduct', component:AddProductComponent},
    {path:'corders', component:CurrentOrdersComponent},
    {path:'dorders', component:DeliveredOrdersComponent},
    {path:'deactivelist', component:DeactiveProductListComponent},
    {path:'editProduct/:pid', component:EditProductComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
