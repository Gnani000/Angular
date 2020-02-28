import { Injectable } from '@angular/core';
import { Category } from './category';
import { SubCategory } from './sub-category';
import { Item } from './item';
import { Bill } from './bill';
import { Buyer } from './buyer';
import { Seller } from './seller';

@Injectable({
  providedIn: 'root'
})
export class EmartService {

  categories: Category[];
  subCategories: SubCategory[];
  allItems: Item[];
  cartItems: Item[];
  allBills: Bill[];
  allBuyers: Buyer[];
  allSellers: Seller[];
  
  constructor() { 
    this.cartItems = [];
    this.allBills = [];

    this.allBuyers = [ { 
                     id: 1001,
                     username: 'admin',
                     password: 'admin',
                     email: 'xyz@gmail.com',
                     mobile: 123456789,
                     date: '1-2-2020'
                      },
                      { 
                        id: 1002,
                        username: 'admin123',
                        password: 'admin123',
                        email: 'xyz123@gmail.com',
                        mobile: 1234567890,
                        date: '2-2-2020'
                         } 
                     ];
    this.allSellers = [{
                        id: 2001,
                        username: 'seller1',
                        password: 'seller1',
                        company: 'abc',
                        brief: 'Description',
                        gst: 2,
                        address: 'address',
                        email: 'asd@gmail.com',
                        website: 'www.google.com',
                        contact: 9876543210
                        },
                        {
                          id: 2002,
                          username: 'seller2',
                          password: 'seller2',
                          company: 'abcd',
                          brief: 'Description',
                          gst: 2,
                          address: 'address2',
                          email: 'asd1@gmail.com',
                          website: 'www.fb.com',
                          contact: 9876543220
                          }
  
                        ];
   
    this.categories = [{
      id:501,
      name:'Electronics',
      brief:'varities of Electronics like Tv and Washing Machine'
        },
       
       
        {
         id:502,
         name:'Mobiles',
         brief:'varities of Mobiles like smartphones and tablets'
           },


           {
             id:503,
             name:'Clothes',
             brief:'varities of clothes like Mens and womens'
               }

       ];
    this.subCategories = [{
      id:601,
      name:'Laptops',
      categoryId:501,
      brief:'description',
      gstPercent:12
     },
   
     {
       id:602,
       name:'Speakers',
       categoryId:501,
       brief:'description',
       gstPercent:10
      },
   
   

      {
       id:603,
       name:'Mobiles',
       categoryId:502,
       brief:'description',
       gstPercent:7
      },



      {
       id:604,
       name:'smartphones',
       categoryId:502,
       brief:'description',
       gstPercent:5
      },



      {
       id:605,
       name:'womens',
       categoryId:503,
       brief:'description',
       gstPercent:6
      },



      {
       id:606,
       name:'mens',
       categoryId:503,
       brief:'description',
       gstPercent:5
      }];
    this.allItems = [{
      id:401,
      name:'Laptop',
      subCategoryId:601,
      categoryId:501,
      price:30000,
      description:'Alienware Laptop',
      stock:2,
      remarks:'good',
      image:'https://images-na.ssl-images-amazon.com/images/I/51TLAZygC5L._SL1072_.jpg'
       },
      
      
       {
        id:402,
        name:'Laptop',
        subCategoryId:601,
        categoryId:501,
        price:30000,
        description:'MSI',
        stock:2,
        remarks:'good',
        image:'https://5.imimg.com/data5/XI/KO/MY-16701245/apple-macbook-air-mqd32hn-a-13-3-inch-laptop-2017-core-i5-8-500x500.jpg'
         },


         {
          id:403,
          name:'Speakers',
          subCategoryId:601,
          categoryId:501,
          price:30000,
          description:'Sony',
          stock:2,
          remarks:'good',
          image:'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1575481612-sony-srs-xb12-extra-bass-wireless-speaker-1562963059.jpg'
           },

           {
            id:404,
            name:'Speakers ',
            subCategoryId:601,
            categoryId:501,
            price:30000,
            description:'Alexa',
            stock:2,
            remarks:'good',
            image:'https://rukminim1.flixcart.com/image/416/416/jfsknm80/smart-assistant/j/q/h/home-mini-ghmini-chalk-google-original-imaf46ev9a8xkahw.jpeg?q=70'
             },
             {
              id:405,
              name:'iPhone X',
              subCategoryId:601,
              categoryId:501,
              price:30000,
              description:'Iphone X',
              stock:2,
              remarks:'good',
              image:'http://thetechnews.com/wp-content/uploads/2018/07/iPhone-X-Back-Panel-1000x600.jpg'
               },

               {
                id:406,
                name:'Mobile',
                subCategoryId:601,
                categoryId:501,
                price:30000,
                description:'Vivo',
                stock:2,
                remarks:'good',
                image:'https://images.unsplash.com/photo-1553034197-73b37e54f5e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
                 },

                 {
                  id:407,
                  name:'tabs',
                  subCategoryId:601,
                  categoryId:501,
                  price:30000,
                  description:'Tab',
                  stock:2,
                  remarks:'good',
                  image:'https://images.unsplash.com/photo-1557825835-70d97c4aa567?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
                   },

         {
          id:408,
          name:'tabs',
          subCategoryId:601,
          categoryId:501,
          price:30000,
          description:'iPad',
          stock:2,
          remarks:'good',
          image:'https://photos5.appleinsider.com/gallery/25503-34789-2018-iPad1-l.jpg'
           },


           {
            id:409,
            name:'shirts',
            subCategoryId:601,
            categoryId:501,
            price:30000,
            description:'T-Shirts',
            stock:2,
            remarks:'good',
            image:'https://5.imimg.com/data5/BP/YX/MY-29828882/rigo-black-henley-t-shirt-500x500.jpg'
             },


             {
              id:410,
              name:'PeterEngland shirts',
              subCategoryId:601,
              categoryId:501,
              price:30000,
              description:'Formals',
              stock:2,
              remarks:'good',
              image:'https://images.unsplash.com/flagged/photo-1564468781192-f023d514222d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
               },


               {
                id:411,
                name:'Batas shoe',
                subCategoryId:601,
                categoryId:501,
                price:2000,
                description:'Batas shoe',
                stock:2,
                remarks:'good',
                image:'https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
                 },


                 {
                  id:412,
                  name:'Adidas Shoe',
                  subCategoryId:601,
                  categoryId:501,
                  price:3000,
                  description:'shoes ',
                  stock:2,
                  remarks:'good',
                  image:'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
                   }];
    
  }
  getAllItems():Item[]{
    return [].concat(this.allItems);
  }

  getCategories():Category[]{
    return [].concat(this.categories);
  }

  getSubCategories():SubCategory[]{
    return [].concat(this.subCategories);
  }

  getAllBills():Bill[]{
    return this.allBills;
  }

  getCategory(catId: number):Category{
    let category:Category;
    let size = this.categories.length;
    for(let i=0; i < size; i++){
      if(this.categories[i].id==catId){
        category = {
                      id: this.categories[i].id,
                      name: this.categories[i].name,
                      brief: this.categories[i].brief
                    };
        break;
      }
    }
    
    return category;
  }

  getSubCategory(catId: number):SubCategory{
    let subCategory:SubCategory;
    let size = this.subCategories.length;
    for(let i=0; i < size; i++){
      if(this.subCategories[i].id==catId){
        subCategory = {
                      id: this.subCategories[i].id,
                      name: this.subCategories[i].name,
                      brief: this.subCategories[i].brief,
                      categoryId: this.subCategories[i].categoryId,
                      gstPercent: this.subCategories[i].gstPercent
                    };
        break;
      }
    }
    return subCategory;
  }

  getItem(itemId: string):Item{
    let item:Item;
    let size = this.allItems.length;
    for(let i=0; i<size; i++){
      if(this.allItems[i].id == +itemId){
        //item = this.allItems[i];
        item = {
                  id: this.allItems[i].id,
                  name: this.allItems[i].name,
                  categoryId: this.allItems[i].categoryId,
                  subCategoryId: this.allItems[i].subCategoryId,
                  price: this.allItems[i].price,
                  description: this.allItems[i].description,
                  stock: this.allItems[i].stock,
                  remarks: this.allItems[i].remarks,
                  image: this.allItems[i].image
               };
        break;
      }
    }
    return item;
  }

  addToCart(itemId: number){
   let item:Item = this.getItem(itemId+'');
   this.cartItems.push(item);
  }

  getAllCart(){
    return [].concat(this.cartItems);
  }

  deleteCartItem(itemNo: number){
    let size = this.cartItems.length;
    for(let i=0;i<size;i++){
      if(this.cartItems[i].id==itemNo){
        this.cartItems.splice(i,1);
        break;
      }
    }
  }

  addBill(buyerId: string, todayDate: string, total: number){
    let billSize = this.allBills.length;
     
    let bill:Bill = {
                      id: 200 + ++billSize,
                      buyerId: +buyerId,
                      type: 'Debit',
                      date: todayDate,
                      remarks: '',
                      items: this.cartItems,
                      amount: total
                    };
    
    this.allBills.push(bill);
    this.cartItems = [];
  }

  validateBuyer(user: string, password: string){
    let buyer: Buyer;
    let size = this.allBuyers.length;
    for(let i=0; i<size; i++){
      if(this.allBuyers[i].username==user && this.allBuyers[i].password==password){
        buyer = {
                  id: this.allBuyers[i].id,
                  username: this.allBuyers[i].username,
                  password: this.allBuyers[i].password,
                  email: this.allBuyers[i].email,
                  mobile: this.allBuyers[i].mobile,
                  date: this.allBuyers[i].date
                }
        break;
      }
    }
    return buyer;
  }

  validateSeller(user: string, password: string){
    let seller: Seller;
    let size = this.allSellers.length;
    for(let i=0; i<size; i++){
      if(this.allSellers[i].username==user && this.allSellers[i].password==password){
        seller = {
                    id: this.allSellers[i].id,
                    username: this.allSellers[i].username,
                    password: this.allSellers[i].password,
                    company: this.allSellers[i].company,
                    brief: this.allSellers[i].brief,
                    gst: this.allSellers[i].gst,
                    address: this.allSellers[i].address,
                    email: this.allSellers[i].email,
                    website: this.allSellers[i].website,
                    contact: this.allSellers[i].contact
                }
        break;
      }
    }
    return seller;
  }

}
