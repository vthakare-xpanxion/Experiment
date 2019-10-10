﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using XCart.DAL;

namespace XCart.DAL.Migrations
{
    [DbContext(typeof(DbXCART))]
    [Migration("20190920075554_ninemigration")]
    partial class ninemigration
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.11-servicing-32099")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("XCart.DBEntities.ADDRESSES", b =>
                {
                    b.Property<int>("AddressId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("AddressLine")
                        .HasMaxLength(100);

                    b.Property<string>("City")
                        .HasMaxLength(50);

                    b.Property<string>("PostalCode")
                        .HasMaxLength(20);

                    b.Property<string>("State")
                        .HasMaxLength(50);

                    b.Property<int?>("SupplierId");

                    b.Property<int?>("UserId");

                    b.HasKey("AddressId");

                    b.HasIndex("SupplierId");

                    b.HasIndex("UserId");

                    b.ToTable("ADDRESSES");
                });

            modelBuilder.Entity("XCart.DBEntities.ADMINS", b =>
                {
                    b.Property<string>("AdminEmailId")
                        .ValueGeneratedOnAdd()
                        .HasMaxLength(100);

                    b.Property<string>("Name")
                        .HasMaxLength(100);

                    b.Property<string>("Password")
                        .HasMaxLength(1000);

                    b.Property<string>("Phone")
                        .HasMaxLength(15);

                    b.Property<string>("UserName")
                        .HasMaxLength(50);

                    b.HasKey("AdminEmailId");

                    b.ToTable("ADMINS");
                });

            modelBuilder.Entity("XCart.DBEntities.CART", b =>
                {
                    b.Property<int>("CartId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("ItemQuantity");

                    b.Property<int?>("ProductId");

                    b.Property<int?>("UserId");

                    b.HasKey("CartId");

                    b.HasIndex("ProductId");

                    b.HasIndex("UserId");

                    b.ToTable("CART");
                });

            modelBuilder.Entity("XCart.DBEntities.CITIES", b =>
                {
                    b.Property<int>("CityId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("CityName")
                        .HasMaxLength(50);

                    b.Property<int?>("StateId");

                    b.HasKey("CityId");

                    b.HasIndex("StateId");

                    b.ToTable("CITIES");
                });

            modelBuilder.Entity("XCart.DBEntities.FEEDBACKS", b =>
                {
                    b.Property<int>("FeedbackId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("ProductId");

                    b.Property<int?>("Rating");

                    b.Property<string>("ReviewComment")
                        .HasMaxLength(550);

                    b.Property<int?>("UserId");

                    b.HasKey("FeedbackId");

                    b.HasIndex("ProductId");

                    b.HasIndex("UserId");

                    b.ToTable("FEEDBACKS");
                });

            modelBuilder.Entity("XCart.DBEntities.ORDERPLACED", b =>
                {
                    b.Property<int>("OderId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Address")
                        .HasMaxLength(1000);

                    b.Property<string>("ModeOfPayment")
                        .HasMaxLength(50);

                    b.Property<DateTime?>("OrderDate")
                        .HasColumnType("date");

                    b.Property<int?>("OrderNo");

                    b.Property<string>("OrderStatus")
                        .HasMaxLength(50);

                    b.Property<int?>("OrderedQuantity");

                    b.Property<int?>("Price");

                    b.Property<int?>("ProductId");

                    b.Property<int?>("TotalAmount");

                    b.Property<int?>("UserId");

                    b.HasKey("OderId");

                    b.HasIndex("ProductId");

                    b.HasIndex("UserId");

                    b.ToTable("ORDERPLACED");
                });

            modelBuilder.Entity("XCart.DBEntities.ORDERSHISTORY", b =>
                {
                    b.Property<int>("OrderHistoryId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("DiliveryAddress")
                        .HasMaxLength(500);

                    b.Property<string>("ModeOfPayment")
                        .HasMaxLength(50);

                    b.Property<int?>("ORDERPLACEDOderId");

                    b.Property<int?>("OrderId");

                    b.Property<int?>("Price");

                    b.Property<string>("ProductName")
                        .HasMaxLength(110);

                    b.Property<DateTime?>("PurchaceProductDate")
                        .HasColumnType("date");

                    b.Property<int?>("Quantity");

                    b.Property<int?>("TotalAmount");

                    b.Property<int?>("UserId");

                    b.Property<string>("UserName")
                        .HasMaxLength(110);

                    b.HasKey("OrderHistoryId");

                    b.HasIndex("ORDERPLACEDOderId");

                    b.ToTable("ORDERSHISTORY");
                });

            modelBuilder.Entity("XCart.DBEntities.PLACEDORDERADDRESS", b =>
                {
                    b.Property<int>("AddressId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("AddressLine")
                        .HasMaxLength(100);

                    b.Property<string>("City")
                        .HasMaxLength(50);

                    b.Property<int?>("ORDERPLACEDOderId");

                    b.Property<int?>("OrderNo");

                    b.Property<string>("PostalCode")
                        .HasMaxLength(20);

                    b.Property<string>("State")
                        .HasMaxLength(50);

                    b.HasKey("AddressId");

                    b.HasIndex("ORDERPLACEDOderId");

                    b.ToTable("PLACEDORDERADDRESS");
                });

            modelBuilder.Entity("XCart.DBEntities.PREVISIT", b =>
                {
                    b.Property<int>("PreVisitId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime?>("PreVisitDate")
                        .HasColumnType("date");

                    b.Property<int?>("ProductId");

                    b.Property<int?>("UserId");

                    b.HasKey("PreVisitId");

                    b.HasIndex("ProductId");

                    b.HasIndex("UserId");

                    b.ToTable("PREVISIT");
                });

            modelBuilder.Entity("XCart.DBEntities.PRODUCTDESCRIPTION", b =>
                {
                    b.Property<int>("DescriptionId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("ProductBrand")
                        .HasMaxLength(50);

                    b.Property<string>("ProductDescription")
                        .HasMaxLength(2000);

                    b.Property<string>("ProductGenderType")
                        .HasMaxLength(10);

                    b.Property<int?>("ProductId");

                    b.Property<string>("ProductSubCategory1")
                        .HasMaxLength(50);

                    b.Property<string>("ProductSubCategory2")
                        .HasMaxLength(50);

                    b.HasKey("DescriptionId");

                    b.HasIndex("ProductId");

                    b.ToTable("PRODUCTDESCRIPTION");
                });

            modelBuilder.Entity("XCart.DBEntities.PRODUCTS", b =>
                {
                    b.Property<int>("ProductId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Category")
                        .HasMaxLength(1500);

                    b.Property<string>("Path")
                        .HasMaxLength(1500);

                    b.Property<int?>("Price");

                    b.Property<int?>("ProductDiscount");

                    b.Property<string>("ProductName")
                        .HasMaxLength(50);

                    b.Property<string>("ProductShortDiscription")
                        .HasMaxLength(550);

                    b.Property<int?>("Stock");

                    b.Property<int?>("SupplierId");

                    b.HasKey("ProductId");

                    b.HasIndex("SupplierId");

                    b.ToTable("PRODUCTS");
                });

            modelBuilder.Entity("XCart.DBEntities.SEARCHHISTORY", b =>
                {
                    b.Property<int>("SearchId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime?>("SearchDate")
                        .HasColumnType("date");

                    b.Property<string>("SearchTag")
                        .HasMaxLength(50);

                    b.Property<int?>("UserId");

                    b.HasKey("SearchId");

                    b.HasIndex("UserId");

                    b.ToTable("SEARCHHISTORY");
                });

            modelBuilder.Entity("XCart.DBEntities.STATES", b =>
                {
                    b.Property<int>("StateId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("StateName")
                        .HasMaxLength(50);

                    b.HasKey("StateId");

                    b.ToTable("STATES");
                });

            modelBuilder.Entity("XCart.DBEntities.SUPPLIERS", b =>
                {
                    b.Property<int>("SupplierId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("SupplierName")
                        .HasMaxLength(50);

                    b.HasKey("SupplierId");

                    b.ToTable("SUPPLIERS");
                });

            modelBuilder.Entity("XCart.DBEntities.USERS", b =>
                {
                    b.Property<int>("UserId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Answer")
                        .HasMaxLength(200);

                    b.Property<DateTime?>("DateOfBirth")
                        .HasColumnType("date");

                    b.Property<string>("EmailId")
                        .HasMaxLength(50);

                    b.Property<string>("FirstName")
                        .HasMaxLength(50);

                    b.Property<string>("Gender")
                        .HasMaxLength(10);

                    b.Property<string>("LastName")
                        .HasMaxLength(50);

                    b.Property<string>("Password")
                        .HasMaxLength(1000);

                    b.Property<string>("PhoneNo")
                        .HasMaxLength(15);

                    b.Property<string>("Question")
                        .HasMaxLength(200);

                    b.Property<string>("Role")
                        .HasMaxLength(10);

                    b.Property<DateTime?>("TimeStamp")
                        .HasColumnType("date");

                    b.HasKey("UserId");

                    b.ToTable("USERS");
                });

            modelBuilder.Entity("XCart.DBEntities.WISHLISTS", b =>
                {
                    b.Property<int>("WishListId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("ProductId");

                    b.Property<int?>("UserId");

                    b.HasKey("WishListId");

                    b.HasIndex("ProductId");

                    b.HasIndex("UserId");

                    b.ToTable("WISHLISTS");
                });

            modelBuilder.Entity("XCart.DBEntities.ADDRESSES", b =>
                {
                    b.HasOne("XCart.DBEntities.SUPPLIERS", "SUPPLIERS")
                        .WithMany("ADDRESSES")
                        .HasForeignKey("SupplierId");

                    b.HasOne("XCart.DBEntities.USERS", "USERS")
                        .WithMany("ADDRESSES")
                        .HasForeignKey("UserId");
                });

            modelBuilder.Entity("XCart.DBEntities.CART", b =>
                {
                    b.HasOne("XCart.DBEntities.PRODUCTS", "PRODUCTS")
                        .WithMany("CARTS")
                        .HasForeignKey("ProductId");

                    b.HasOne("XCart.DBEntities.USERS", "USERS")
                        .WithMany("CART")
                        .HasForeignKey("UserId");
                });

            modelBuilder.Entity("XCart.DBEntities.CITIES", b =>
                {
                    b.HasOne("XCart.DBEntities.STATES", "STATES")
                        .WithMany("CITIES")
                        .HasForeignKey("StateId");
                });

            modelBuilder.Entity("XCart.DBEntities.FEEDBACKS", b =>
                {
                    b.HasOne("XCart.DBEntities.PRODUCTS", "PRODUCTS")
                        .WithMany("FEEDBACKS")
                        .HasForeignKey("ProductId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("XCart.DBEntities.USERS", "USERS")
                        .WithMany("FEEDBACKS")
                        .HasForeignKey("UserId");
                });

            modelBuilder.Entity("XCart.DBEntities.ORDERPLACED", b =>
                {
                    b.HasOne("XCart.DBEntities.PRODUCTS", "PRODUCTS")
                        .WithMany("ORDERPLACED")
                        .HasForeignKey("ProductId");

                    b.HasOne("XCart.DBEntities.USERS", "USERS")
                        .WithMany("ORDERPLACED")
                        .HasForeignKey("UserId");
                });

            modelBuilder.Entity("XCart.DBEntities.ORDERSHISTORY", b =>
                {
                    b.HasOne("XCart.DBEntities.ORDERPLACED", "ORDERPLACED")
                        .WithMany("ORDERSHISTORY")
                        .HasForeignKey("ORDERPLACEDOderId");
                });

            modelBuilder.Entity("XCart.DBEntities.PLACEDORDERADDRESS", b =>
                {
                    b.HasOne("XCart.DBEntities.ORDERPLACED", "ORDERPLACED")
                        .WithMany("PLACEDORDERADDRESS")
                        .HasForeignKey("ORDERPLACEDOderId");
                });

            modelBuilder.Entity("XCart.DBEntities.PREVISIT", b =>
                {
                    b.HasOne("XCart.DBEntities.PRODUCTS", "PRODUCTS")
                        .WithMany("PREVISIT")
                        .HasForeignKey("ProductId");

                    b.HasOne("XCart.DBEntities.USERS", "USERS")
                        .WithMany("PREVISIT")
                        .HasForeignKey("UserId");
                });

            modelBuilder.Entity("XCart.DBEntities.PRODUCTDESCRIPTION", b =>
                {
                    b.HasOne("XCart.DBEntities.PRODUCTS", "PRODUCTS")
                        .WithMany("PRODUCTDESCRIPTION")
                        .HasForeignKey("ProductId");
                });

            modelBuilder.Entity("XCart.DBEntities.PRODUCTS", b =>
                {
                    b.HasOne("XCart.DBEntities.SUPPLIERS", "SUPPLIERS")
                        .WithMany("PRODUCTS")
                        .HasForeignKey("SupplierId");
                });

            modelBuilder.Entity("XCart.DBEntities.SEARCHHISTORY", b =>
                {
                    b.HasOne("XCart.DBEntities.USERS", "USERS")
                        .WithMany("SEARCHHISTORY")
                        .HasForeignKey("UserId");
                });

            modelBuilder.Entity("XCart.DBEntities.WISHLISTS", b =>
                {
                    b.HasOne("XCart.DBEntities.PRODUCTS", "PRODUCTS")
                        .WithMany("WISHLISTS")
                        .HasForeignKey("ProductId");

                    b.HasOne("XCart.DBEntities.USERS", "USERS")
                        .WithMany("WISHLISTS")
                        .HasForeignKey("UserId");
                });
#pragma warning restore 612, 618
        }
    }
}
