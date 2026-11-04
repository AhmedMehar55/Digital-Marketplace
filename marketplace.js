/* ==========================================
   DIGITAL MARKETPLACE
   PREMIUM DIGITAL-ONLY MARKETPLACE
========================================== */

const $ = s => document.querySelector(s);

const whatsappChannel =
  "https://whatsapp.com/channel/0029VakUOHMEVccRjli02O0R";


// ==========================================
// CATEGORIES - ORIGINAL DIGITAL MARKETPLACE
// ==========================================

const categories = [

{
 name:"Gaming & Games",
 icon:"bi-controller",
 subs:[
  "PUBG Mobile IDs","Free Fire Diamonds","PUBG UC Top Up",
  "Free Fire IDs","Other Gaming IDs"
 ]
},

{
 name:"WhatsApp Services",
 icon:"bi-whatsapp",
 subs:[
  "WhatsApp Channels","WhatsApp Groups","WhatsApp Accounts",
  "WhatsApp Channel Promotion","WhatsApp Channel Followers",
  "WhatsApp Blue Tick Services","WhatsApp Channel Buying & Selling",
  "WhatsApp Business Services"
 ]
},

{
 name:"YouTube Services",
 icon:"bi-youtube",
 subs:[
  "YouTube Channels","Monetized YouTube Channels",
  "YouTube Subscribers","YouTube Watch Hours","YouTube Views",
  "YouTube Likes & Comments","YouTube Promotion",
  "YouTube Automation","YouTube SEO Services"
 ]
},

{
 name:"TikTok Services",
 icon:"bi-tiktok",
 subs:[
  "TikTok Accounts","TikTok Monetized Accounts","TikTok Followers",
  "TikTok Likes","TikTok Views","TikTok Live Services",
  "TikTok Coins","TikTok Promotion"
 ]
},

{
 name:"Facebook Services",
 icon:"bi-facebook",
 subs:[
  "Facebook Accounts","Facebook Pages","Facebook Monetized Pages",
  "Facebook Groups","Facebook Followers","Facebook Likes & Reactions",
  "Facebook Stars","Facebook Ads Services","Facebook Page Promotion"
 ]
},

{
 name:"Instagram Services",
 icon:"bi-instagram",
 subs:[
  "Instagram Accounts","Instagram Theme Pages","Instagram Followers",
  "Instagram Likes","Instagram Views","Instagram Reels Promotion",
  "Instagram Ads Services"
 ]
},

{
 name:"Other Social Media",
 icon:"bi-globe2",
 subs:[
  "X (Twitter) Accounts & Services","Telegram Channels",
  "Telegram Groups","Snapchat Accounts",
  "LinkedIn Accounts & Services","Pinterest Accounts & Services",
  "Other Social Media Accounts"
 ]
},

{
 name:"Digital Marketing & Promotion",
 icon:"bi-megaphone",
 subs:[
  "Social Media Marketing","Paid Advertising Services",
  "Google Ads Services","Meta Ads Services",
  "Website Traffic Services","SEO Services",
  "Brand Promotion","Digital Marketing Packages"
 ]
},

{
 name:"Digital Products",
 icon:"bi-laptop",
 subs:[
  "Online Courses","Canva Templates","Fonts & Graphics",
  "Software & Digital Tools","Presentation Templates",
  "Templates & Designs"
 ]
},

{
 name:"Subscriptions & Memberships",
 icon:"bi-gem",
 subs:[
  "Netflix Subscriptions","Spotify Subscriptions","YouTube Premium",
  "Canva Pro","ChatGPT Subscriptions","Microsoft 365",
  "Google One Storage","Cloud Storage Plans","VPN Subscriptions",
  "Other Software Subscriptions"
 ]
},

{
 name:"Websites & Online Business",
 icon:"bi-window",
 subs:[
  "Websites for Sale","Hosting Services","Website Development",
  "Website Maintenance","Blogs & Niche Websites",
  "E-commerce Stores","Domain Names"
 ]
},

{
 name:"Freelancing & Digital Services",
 icon:"bi-briefcase",
 subs:[
  "Graphic Designing","Logo Designing","Video Editing",
  "Photo Editing","Content Writing","Copywriting",
  "Translation Services","Data Entry","Virtual Assistant",
  "Web Development","App Development","Programming Services",
  "AI Services","AI Image & Video Creation"
 ]
},

{
 name:"Other Digital Services",
 icon:"bi-grid",
 subs:[
  "Email Accounts & Services","Digital Gift Cards","Game Gift Cards",
  "Mobile Game Vouchers","Mobile Recharge & Top Ups",
  "Digital Payment Services","Online Tools & Utilities",
  "Account Setup Services","Other Digital Products & Services"
 ]
}

];


// ==========================================
// DEMO DIGITAL LISTINGS
// ==========================================

const demoAds = [

["Premium WhatsApp Channel for Sale","WhatsApp Services","WhatsApp Channels",12500,"Multan","bi-whatsapp","Used"],
["WhatsApp Channel Promotion Package","WhatsApp Services","WhatsApp Channel Promotion",2500,"Lahore","bi-megaphone","Service"],
["Active WhatsApp Community Channel","WhatsApp Services","WhatsApp Channels",8500,"Karachi","bi-people","Used"],
["WhatsApp Business Setup Service","WhatsApp Services","WhatsApp Business Services",1800,"Islamabad","bi-whatsapp","Service"],

["Monetized YouTube Channel","YouTube Services","Monetized YouTube Channels",65000,"Lahore","bi-youtube","Used"],
["YouTube SEO Package","YouTube Services","YouTube SEO Services",4500,"Multan","bi-search","Service"],
["YouTube Watch Hours Service","YouTube Services","YouTube Watch Hours",3500,"Karachi","bi-clock","Service"],
["YouTube Automation Setup","YouTube Services","YouTube Automation",15000,"Islamabad","bi-robot","Service"],

["TikTok Account Available","TikTok Services","TikTok Accounts",18000,"Multan","bi-tiktok","Used"],
["TikTok Promotion Package","TikTok Services","TikTok Promotion",2200,"Lahore","bi-megaphone","Service"],
["TikTok Monetized Account","TikTok Services","TikTok Monetized Accounts",45000,"Karachi","bi-person-video","Used"],
["TikTok Content Growth Service","TikTok Services","TikTok Views",1500,"Islamabad","bi-graph-up","Service"],

["Facebook Monetized Page","Facebook Services","Facebook Monetized Pages",35000,"Lahore","bi-facebook","Used"],
["Facebook Page Promotion","Facebook Services","Facebook Page Promotion",3000,"Multan","bi-megaphone","Service"],
["Facebook Business Page","Facebook Services","Facebook Pages",12000,"Karachi","bi-building","Used"],
["Facebook Ads Management","Facebook Services","Facebook Ads Services",5000,"Islamabad","bi-bullseye","Service"],

["Instagram Theme Page","Instagram Services","Instagram Theme Pages",22000,"Multan","bi-instagram","Used"],
["Instagram Reels Promotion","Instagram Services","Instagram Reels Promotion",1800,"Lahore","bi-camera-video","Service"],
["Instagram Business Account","Instagram Services","Instagram Accounts",9500,"Karachi","bi-person-circle","Used"],
["Instagram Marketing Package","Instagram Services","Instagram Ads Services",4500,"Islamabad","bi-megaphone","Service"],

["PUBG Mobile ID Premium","Gaming & Games","PUBG Mobile IDs",18000,"Multan","bi-controller","Used"],
["Free Fire Diamonds Package","Gaming & Games","Free Fire Diamonds",1200,"Lahore","bi-gem","Service"],
["PUBG UC Top Up Package","Gaming & Games","PUBG UC Top Up",2500,"Karachi","bi-coin","Service"],
["Free Fire Gaming ID","Gaming & Games","Free Fire IDs",8500,"Islamabad","bi-controller","Used"],

["Professional Video Editing","Freelancing & Digital Services","Video Editing",3500,"Multan","bi-film","Service"],
["Premium Logo Designing","Freelancing & Digital Services","Logo Designing",2500,"Lahore","bi-brush","Service"],
["Website Development Service","Freelancing & Digital Services","Web Development",18000,"Karachi","bi-code-slash","Service"],
["AI Image Creation Package","Freelancing & Digital Services","AI Image & Video Creation",2000,"Islamabad","bi-stars","Service"],

["Canva Editable Templates Bundle","Digital Products","Canva Templates",1200,"Multan","bi-palette","New"],
["Professional Online Course","Digital Products","Online Courses",3500,"Lahore","bi-mortarboard","New"],
["Premium Graphics Bundle","Digital Products","Fonts & Graphics",950,"Karachi","bi-images","New"],
["Business Presentation Templates","Digital Products","Presentation Templates",1500,"Islamabad","bi-easel","New"],

["Canva Pro Subscription","Subscriptions & Memberships","Canva Pro",1800,"Multan","bi-gem","New"],
["ChatGPT Subscription Service","Subscriptions & Memberships","ChatGPT Subscriptions",3500,"Lahore","bi-robot","Service"],
["Microsoft 365 Subscription","Subscriptions & Memberships","Microsoft 365",2200,"Karachi","bi-microsoft","New"],
["YouTube Premium Subscription","Subscriptions & Memberships","YouTube Premium",900,"Islamabad","bi-youtube","New"],

["Telegram Channel Available","Other Social Media","Telegram Channels",7500,"Multan","bi-telegram","Used"],
["LinkedIn Profile Service","Other Social Media","LinkedIn Accounts & Services",2500,"Lahore","bi-linkedin","Service"],
["Pinterest Account Service","Other Social Media","Pinterest Accounts & Services",1800,"Karachi","bi-pinterest","Service"],
["Snapchat Account Available","Other Social Media","Snapchat Accounts",4500,"Islamabad","bi-snapchat","Used"],

["Google Ads Management","Digital Marketing & Promotion","Google Ads Services",6500,"Multan","bi-google","Service"],
["Complete SEO Package","Digital Marketing & Promotion","SEO Services",8500,"Lahore","bi-search","Service"],
["Social Media Marketing","Digital Marketing & Promotion","Social Media Marketing",4500,"Karachi","bi-graph-up-arrow","Service"],
["Brand Promotion Package","Digital Marketing & Promotion","Brand Promotion",3000,"Islamabad","bi-megaphone","Service"],

["Website for Sale","Websites & Online Business","Websites for Sale",45000,"Multan","bi-globe","Used"],
["WordPress Website Development","Websites & Online Business","Website Development",12000,"Lahore","bi-window","Service"],
["Domain Name Available","Websites & Online Business","Domain Names",6500,"Karachi","bi-globe2","New"],
["E-commerce Store Setup","Websites & Online Business","E-commerce Stores",18000,"Islamabad","bi-shop","Service"],

["Digital Gift Card","Other Digital Services","Digital Gift Cards",2500,"Multan","bi-gift","New"],
["Email Setup Service","Other Digital Services","Email Accounts & Services",1200,"Lahore","bi-envelope","Service"],
["Mobile Recharge Service","Other Digital Services","Mobile Recharge & Top Ups",500,"Karachi","bi-phone","Service"],
["Online Tools Package","Other Digital Services","Online Tools & Utilities",1500,"Islamabad","bi-tools","Service"]

];


// ==========================================
// IMAGE COLLECTION
// ==========================================

const digitalImages = [
"https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=700",
"https://images.unsplash.com/photo-1611262588024-d12430b98920?w=700",
"https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=700",
"https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=700",
"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=700",
"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700",
"https://images.unsplash.com/photo-1559028012-481c04fa702d?w=700",
"https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=700",
"https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=700",
"https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=700",
"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700",
"https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=700"
];


// ==========================================
// STATE
// ==========================================

let ads = demoAds.map((item,index)=>({
 id:"demo-"+index,
 title:item[0],
 category:item[1],
 subcategory:item[2],
 price:item[3],
 location:item[4],
 icon:item[5],
 condition:item[6],
 image:digitalImages[index % digitalImages.length],
 description:"This digital product or service is available from the seller. Contact the seller for complete details.",
 seller:"Marketplace Seller",
 status:"approved",
 created:Date.now()-(index*3600000)
}));

let favorites = [];
let activeCategory = "";
let activeSubcategory = "";
let searchTerm = "";
let selectedLocation = "";


// ==========================================
// UTILITIES
// ==========================================

function safe(value) {
 return String(value ?? "").replace(/[&<>"']/g, c=>({
  "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
 }[c]));
}

function money(value) {
 return "Rs. "+Number(value).toLocaleString("en-PK");
}

function toast(message) {
 const el=$("#toast");
 el.textContent=message;
 el.classList.add("show");
 clearTimeout(toast.timer);
 toast.timer=setTimeout(()=>el.classList.remove("show"),3000);
}

function openModal(html) {
 $("#modalContent").innerHTML=html;
 $("#modalOverlay").hidden=false;
}

function closeModal() {
 $("#modalOverlay").hidden=true;
}

function timeAgo(time) {
 const hours=Math.floor((Date.now()-time)/3600000);
 if(hours<1) return "Just now";
 if(hours<24) return hours+" hours ago";
 return Math.floor(hours/24)+" days ago";
}


// ==========================================
// CATEGORY DISPLAY
// ==========================================

function renderCategories() {

 $("#categoryGrid").innerHTML=categories.map((cat,index)=>`

  <button class="category-card" data-category="${index}">
   <div class="category-icon cat-${index+1}">
    <i class="bi ${cat.icon}"></i>
   </div>
   <h3>${safe(cat.name)}</h3>
   <small>${cat.subs.length} subcategories</small>
  </button>

 `).join("");

 document.querySelectorAll("[data-category]").forEach(btn=>{
  btn.addEventListener("click",()=>showCategory(Number(btn.dataset.category)));
 });

}


// ==========================================
// PRODUCT CARD
// ==========================================

function card(ad) {

 const liked=favorites.includes(ad.id);

 return `
  <article class="product-card">

   <div class="product-image" data-detail="${safe(ad.id)}">
    <img src="${safe(ad.image)}" alt="${safe(ad.title)}" loading="lazy">

    <button class="favorite-btn ${liked?"active":""}"
      data-favorite="${safe(ad.id)}" type="button">
      <i class="bi ${liked?"bi-heart-fill":"bi-heart"}"></i>
    </button>

    <span class="product-condition">${safe(ad.condition)}</span>
   </div>

   <div class="product-info" data-detail="${safe(ad.id)}">
    <div class="product-price">${money(ad.price)}</div>
    <h3 class="product-title">${safe(ad.title)}</h3>
    <span class="product-category-label">${safe(ad.subcategory)}</span>

    <div class="product-location">
     <span><i class="bi bi-geo-alt"></i>${safe(ad.location)}</span>
     <span>${timeAgo(ad.created)}</span>
    </div>
   </div>

  </article>
 `;
}

function renderGrid(container,list) {

 if(!list.length) {
  container.innerHTML=`
   <div class="empty-results">
    <i class="bi bi-search"></i>
    No matching listings found.
    <p>Try another keyword or category.</p>
   </div>`;
  return;
 }

 container.innerHTML=list.map(card).join("");
 attachCardEvents(container);
}

function attachCardEvents(container) {

 container.querySelectorAll("[data-favorite]").forEach(btn=>{
  btn.addEventListener("click",e=>{
   e.stopPropagation();
   const id=btn.dataset.favorite;

   favorites=favorites.includes(id)
    ? favorites.filter(x=>x!==id)
    : [...favorites,id];

   btn.classList.toggle("active");
   btn.querySelector("i").className=
    favorites.includes(id)?"bi bi-heart-fill":"bi bi-heart";
  });
 });

 container.querySelectorAll("[data-detail]").forEach(el=>{
  el.addEventListener("click",()=>showDetails(el.dataset.detail));
 });

}


// ==========================================
// HOME LISTINGS
// ==========================================

function renderHome() {

 const approved=ads.filter(a=>a.status==="approved");

 renderGrid(
  $("#latestProducts"),
  [...approved].sort((a,b)=>b.created-a.created).slice(0,8)
 );

 $("#popular").innerHTML=categories.map((cat,index)=>`

  <section class="product-section">
   <div class="section-title">
    <div>
     <h2>${safe(cat.name)}</h2>
     <p>Explore ${safe(cat.name)} listings</p>
    </div>
    <button class="view-all-btn" data-view="${index}">
     View More <i class="bi bi-arrow-right"></i>
    </button>
   </div>
   <div class="product-grid" id="homeGrid${index}"></div>
  </section>

 `).join("");

 categories.forEach((cat,index)=>{
  const list=approved.filter(a=>a.category===cat.name);
  renderGrid($(`#homeGrid${index}`),list.slice(0,4));
 });

 document.querySelectorAll("[data-view]").forEach(btn=>{
  btn.addEventListener("click",()=>showCategory(Number(btn.dataset.view)));
 });

}


// ==========================================
// CATEGORY PAGE
// ==========================================

function showCategory(index) {

 const cat=categories[index];
 if(!cat) return;

 activeCategory=cat.name;
 activeSubcategory="";

 $("#homeListingSections").hidden=true;
 $("#categoryResults").hidden=false;

 $("#categoryPageTitle").textContent=cat.name;
 $("#categoryPageSubtitle").textContent=
  "Explore digital products and services in "+cat.name;

 $("#breadcrumbCategory").textContent=cat.name;

 $("#subcategoryFilter").innerHTML=
  `<option value="">All subcategories</option>`+
  cat.subs.map(s=>`<option value="${safe(s)}">${safe(s)}</option>`).join("");

 $("#conditionFilter").value="";
 $("#categorySort").value="newest";

 renderCategoryResults();

 $("#categoryResults").scrollIntoView({behavior:"smooth"});
}

function renderCategoryResults() {

 let list=ads.filter(a=>
  a.status==="approved" && a.category===activeCategory
 );

 if(activeSubcategory) {
  list=list.filter(a=>a.subcategory===activeSubcategory);
 }

 const condition=$("#conditionFilter").value;
 if(condition) list=list.filter(a=>a.condition===condition);

 const sort=$("#categorySort").value;
 list=sortAds(list,sort);

 renderGrid($("#categoryProductGrid"),list);
}

function sortAds(list,sort) {
 const result=[...list];

 if(sort==="low") result.sort((a,b)=>a.price-b.price);
 else if(sort==="high") result.sort((a,b)=>b.price-a.price);
 else result.sort((a,b)=>b.created-a.created);

 return result;
}


// ==========================================
// SEARCH
// ==========================================

function searchAds(event) {
 if(event) event.preventDefault();

 searchTerm=$("#searchInput").value.trim().toLowerCase();
 selectedLocation=$("#locationSelect").value;

 const results=ads.filter(ad=>{

  if(ad.status!=="approved") return false;

  const text=[
   ad.title,ad.category,ad.subcategory,
   ad.description,ad.location
  ].join(" ").toLowerCase();

  const matchText=!searchTerm || text.includes(searchTerm);
  const matchLocation=!selectedLocation ||
   ad.location===selectedLocation ||
   selectedLocation==="Other";

  return matchText && matchLocation;
 });

 $("#homeListingSections").hidden=true;
 $("#categoryResults").hidden=false;

 $("#categoryPageTitle").textContent=
  searchTerm?"Search results":"All digital listings";

 $("#categoryPageSubtitle").textContent=
  results.length+" matching listings found";

 $("#breadcrumbCategory").textContent="Search";

 $("#subcategoryFilter").innerHTML=
  `<option value="">All subcategories</option>`;

 renderGrid($("#categoryProductGrid"),sortAds(results,"newest"));

 $("#categoryResults").scrollIntoView({behavior:"smooth"});
}


// ==========================================
// PRODUCT DETAILS
// ==========================================

function showDetails(id) {

 const ad=ads.find(a=>a.id===id);
 if(!ad) return;

 openModal(`
  <img src="${safe(ad.image)}" alt=""
   style="width:100%;height:190px;object-fit:cover;border-radius:10px;margin-bottom:17px">

  <span class="section-kicker">${safe(ad.category)}</span>
  <h2>${safe(ad.title)}</h2>
  <h2 style="color:#315fff;margin:12px 0">${money(ad.price)}</h2>

  <p class="modal-subtitle">${safe(ad.description)}</p>

  <p class="form-help">
   Subcategory: ${safe(ad.subcategory)}<br>
   Location: ${safe(ad.location)}<br>
   Seller: ${safe(ad.seller)}
  </p>

  <div style="display:grid;gap:10px;margin-top:20px">
   <button class="form-submit" id="chatSeller">
    <i class="bi bi-chat-dots"></i> Chat with Seller
   </button>
   <button class="outline-btn" id="dealOptions" style="width:100%">
    <i class="bi bi-bag-check"></i> Buy / Deal Options
   </button>
  </div>
 `);

 $("#chatSeller").addEventListener("click",()=>{
  showLoginNotice("Login is required to use private chat.");
 });

 $("#dealOptions").addEventListener("click",()=>{
  showDealOptions(ad);
 });

}


// ==========================================
// LOGIN PLACEHOLDER
// ==========================================

function showLoginNotice(message) {

 openModal(`
  <h2>Login required</h2>
  <p class="modal-subtitle">${safe(message)}</p>

  <div class="form-group">
   <label>Email address</label>
   <input type="email" id="loginEmail" placeholder="Enter your email">
  </div>

  <div class="form-group">
   <label>Password</label>
   <input type="password" id="loginPassword" placeholder="Enter password">
  </div>

  <button class="form-submit" id="loginContinue">Continue</button>

  <p class="form-help">
   Google login, phone OTP and secure account registration
   will be connected through Supabase.
  </p>
 `);

 $("#loginContinue").addEventListener("click",()=>{
  toast("Real login will be enabled after Supabase setup.");
 });

}


// ==========================================
// DEAL OPTIONS
// ==========================================

function showDealOptions(ad) {

 openModal(`
  <h2>Choose your deal type</h2>
  <p class="modal-subtitle">
   Select how you want to complete this purchase.
  </p>

  <div class="deal-option" id="directDeal">
   <i class="bi bi-chat-left-text"></i>
   <div>
    <b>Direct Deal</b>
    <p>Contact the seller and arrange the deal directly.</p>
   </div>
   <i class="bi bi-chevron-right"></i>
  </div>

  <div class="deal-option" id="websiteDeal">
   <i class="bi bi-shield-check"></i>
   <div>
    <b>Website Deal</b>
    <p>Place an order through the marketplace and follow the payment verification process.</p>
   </div>
   <i class="bi bi-chevron-right"></i>
  </div>

  <p class="form-help">
   Website Deal commission: 0% for now.
  </p>
 `);

 $("#directDeal").addEventListener("click",()=>{
  directDeal(ad);
 });

 $("#websiteDeal").addEventListener("click",()=>{
  websiteDeal(ad);
 });

}

function directDeal(ad) {

 openModal(`
  <h2>Direct Deal</h2>
  <p class="modal-subtitle">
   You selected a direct deal for ${safe(ad.title)}.
  </p>

  <div class="order-summary">
   <b>${safe(ad.title)}</b>
   <strong>${money(ad.price)}</strong>
  </div>

  <p class="form-help">
   Direct deals are arranged between buyer and seller.
   Use the marketplace chat to discuss details.
  </p>

  <button class="form-submit" id="directChat">
   Continue to Seller Chat
  </button>
 `);

 $("#directChat").addEventListener("click",()=>{
  showLoginNotice("Please log in before starting a private seller chat.");
 });

}


// ==========================================
// WEBSITE DEAL - ORDER FLOW
// ==========================================

function websiteDeal(ad) {

 const orderId="DM-"+Date.now();

 openModal(`
  <h2>Website Deal</h2>
  <p class="modal-subtitle">Review your order before continuing.</p>

  <div class="order-summary">
   <b>${safe(ad.title)}</b>
   <strong>${money(ad.price)}</strong>
   <small>Order reference: ${orderId}</small>
  </div>

  <div class="payment-step">
   <span>1</span>
   <div>
    <b>Place your order</b>
    <p>Confirm the product and order details.</p>
   </div>
  </div>

  <div class="payment-step">
   <span>2</span>
   <div>
    <b>Payment instructions</b>
    <p>Payment methods will be configured by the administrator.</p>
   </div>
  </div>

  <div class="payment-step">
   <span>3</span>
   <div>
    <b>Upload payment receipt</b>
    <p>Admin manually verifies the payment.</p>
   </div>
  </div>

  <button class="form-submit" id="placeOrderBtn">
   Confirm Order
  </button>

  <p class="form-help">
   This is a front-end demonstration. No real payment is collected.
  </p>
 `);

 $("#placeOrderBtn").addEventListener("click",()=>{
  paymentReceiptStep(ad,orderId);
 });

}

function paymentReceiptStep(ad,orderId) {

 openModal(`
  <h2>Payment Verification</h2>
  <p class="modal-subtitle">
   Order ${orderId} · Total ${money(ad.price)}
  </p>

  <div class="payment-instructions">
   <b>Payment Instructions</b>
   <p>The administrator will add Easypaisa, JazzCash or bank details here.</p>
   <small>Do not send money to an unverified account.</small>
  </div>

  <div class="form-group">
   <label>Payment reference / transaction ID</label>
   <input id="paymentReference" placeholder="Enter transaction ID">
  </div>

  <div class="form-group">
   <label>Upload payment receipt</label>
   <input id="paymentReceipt" type="file" accept="image/*,.pdf">
  </div>

  <button class="form-submit" id="submitReceipt">
   Submit for Admin Verification
  </button>
 `);

 $("#submitReceipt").addEventListener("click",()=>{
  const file=$("#paymentReceipt").files[0];
  const reference=$("#paymentReference").value.trim();

  if(!file || !reference) {
   toast("Please enter your transaction reference and select a receipt.");
   return;
  }

  openModal(`
   <h2>Receipt Submitted</h2>
   <p class="modal-subtitle">
    Your receipt is ready for admin verification in this demo.
   </p>

   <div class="order-summary">
    <b>Order: ${orderId}</b>
    <strong>Pending verification</strong>
   </div>

   <p class="form-help">
    In the live website, the receipt and order will be securely saved
    in Supabase for admin review.
   </p>

   <button class="form-submit" id="continueOrder">
    View Order Status
   </button>
  `);

  $("#continueOrder").addEventListener("click",()=>{
   showOrderStatus(ad,orderId);
  });
 });

}

function showOrderStatus(ad,orderId) {

 openModal(`
  <h2>Order Status</h2>

  <div class="order-summary">
   <b>${safe(ad.title)}</b>
   <strong>${money(ad.price)}</strong>
   <small>${orderId}</small>
  </div>

  <div class="status-line">
   <span class="status-dot pending"></span>
   <div>
    <b>Payment verification pending</b>
    <p>Admin needs to verify your receipt.</p>
   </div>
  </div>

  <div class="status-line">
   <span class="status-dot"></span>
   <div>
    <b>Seller delivery</b>
    <p>Seller provides the digital product or service after confirmation.</p>
   </div>
  </div>

  <div class="status-line">
   <span class="status-dot"></span>
   <div>
    <b>Buyer confirmation</b>
    <p>Buyer confirms when the order has been completed.</p>
   </div>
  </div>

  <p class="form-help">
   Order completion requires buyer confirmation.
   Admin can intervene in disputes.
  </p>
 `);

}


// ==========================================
// POST AN AD FORM
// ==========================================

function showSellForm() {

 openModal(`
  <h2>Post a Digital Ad</h2>
  <p class="modal-subtitle">
   Create your free digital product or service listing.
  </p>

  <form id="adForm">

   <div class="form-group">
    <label>Advertisement Title *</label>
    <input name="title" required maxlength="100"
     placeholder="Enter your ad title">
   </div>

   <div class="form-group">
    <label>Main Category *</label>
    <select name="category" id="adCategory" required>
     <option value="">Select category</option>
     ${categories.map(c=>`<option value="${safe(c.name)}">${safe(c.name)}</option>`).join("")}
    </select>
   </div>

   <div class="form-group">
    <label>Subcategory *</label>
    <select name="subcategory" id="adSubcategory" required>
     <option value="">Select subcategory</option>
    </select>
   </div>

   <div class="form-group">
    <label>Original Price (Optional)</label>
    <input type="number" name="originalPrice" min="0" placeholder="Original price">
   </div>

   <div class="form-group">
    <label>Offer Price (PKR) *</label>
    <input type="number" name="price" min="1" required placeholder="Enter offer price">
   </div>

   <div class="form-group">
    <label>Product / Service Link *</label>
    <input type="url" name="link" required placeholder="https://example.com">
   </div>

   <div class="form-group">
    <label>Product Image (Optional)</label>
    <input type="file" name="image" accept="image/*">
   </div>

   <div class="form-group">
    <label>Description (Optional)</label>
    <textarea name="description" placeholder="Write product details"></textarea>
   </div>

   <button class="form-submit" type="submit">
    Submit Ad for Approval
   </button>

   <p class="form-help">
    Listings are free. Each approved listing remains active for 30 days.
    Admin approval is required before publication.
   </p>

  </form>
 `);

 $("#adCategory").addEventListener("change",()=>{
  const category=categories.find(c=>c.name===$("#adCategory").value);

  $("#adSubcategory").innerHTML=
   `<option value="">Select subcategory</option>`+
   (category?.subs||[]).map(s=>
    `<option value="${safe(s)}">${safe(s)}</option>`
   ).join("");
 });

 $("#adForm").addEventListener("submit",event=>{
  event.preventDefault();

  const form=new FormData(event.currentTarget);
  const category=categories.find(c=>c.name===form.get("category"));

  if(!category || !category.subs.includes(form.get("subcategory"))) {
   toast("Please select a valid category and subcategory.");
   return;
  }

  const imageFile=form.get("image");

  const newAd={
   id:"local-"+Date.now(),
   title:form.get("title").trim(),
   category:form.get("category"),
   subcategory:form.get("subcategory"),
   price:Number(form.get("price")),
   originalPrice:Number(form.get("originalPrice"))||null,
   location:"Pakistan",
   icon:"bi-stars",
   condition:"Service",
   image:digitalImages[0],
   description:form.get("description").trim(),
   link:form.get("link").trim(),
   seller:"New Seller",
   status:"pending",
   created:Date.now()
  };

  ads.unshift(newAd);

  closeModal();

  toast("Your ad has been submitted and is awaiting admin approval.");

  // Pending listings are not displayed publicly.
 });

}


// ==========================================
// LOGIN / REGISTRATION PREVIEW
// ==========================================

function showLogin() {

 openModal(`
  <h2>Welcome to Digital Marketplace</h2>
  <p class="modal-subtitle">Sign in to buy, sell and connect.</p>

  <div class="form-group">
   <label>Email Address</label>
   <input type="email" id="accountEmail" placeholder="Enter email address">
  </div>

  <div class="form-group">
   <label>Password</label>
   <input type="password" id="accountPassword" placeholder="Enter password">
  </div>

  <button class="form-submit" id="emailLogin">Continue with Email</button>

  <button class="outline-btn" id="googleLogin"
   style="width:100%;margin-top:10px">
   <i class="bi bi-google"></i> Continue with Google
  </button>

  <p class="form-help">
   Phone OTP and secure authentication will be connected through Supabase.
  </p>
 `);

 $("#emailLogin").addEventListener("click",()=>{
  toast("Authentication will be activated during Supabase integration.");
 });

 $("#googleLogin").addEventListener("click",()=>{
  toast("Google sign-in will be configured in Supabase.");
 });

}


// ==========================================
// NAVIGATION
// ==========================================

function returnHome() {
 $("#categoryResults").hidden=true;
 $("#homeListingSections").hidden=false;
 window.scrollTo({top:0,behavior:"smooth"});
}

$("#homeLogo").addEventListener("click",e=>{
 e.preventDefault();
 returnHome();
});

$("#breadcrumbHome").addEventListener("click",e=>{
 e.preventDefault();
 returnHome();
});

$("#backHomeBtn").addEventListener("click",returnHome);

$("#searchForm").addEventListener("submit",searchAds);

$("#subcategoryFilter").addEventListener("change",e=>{
 activeSubcategory=e.target.value;
 renderCategoryResults();
});

$("#conditionFilter").addEventListener("change",renderCategoryResults);
$("#categorySort").addEventListener("change",renderCategoryResults);

$("#sellBtn").addEventListener("click",showSellForm);
$("#bannerSellBtn").addEventListener("click",showSellForm);
$("#mobileSellBtn").addEventListener("click",showSellForm);

$("#loginBtn").addEventListener("click",showLogin);
$("#mobileLoginBtn").addEventListener("click",showLogin);
$("#footerLogin").addEventListener("click",e=>{
 e.preventDefault();
 showLogin();
});

$("#footerSell").addEventListener("click",e=>{
 e.preventDefault();
 showSellForm();
});

$("#showAllCategories").addEventListener("click",()=>{
 $("#categories").scrollIntoView({behavior:"smooth"});
});

$("#latestViewAll").addEventListener("click",()=>{
 $("#searchInput").value="";
 $("#locationSelect").value="";
 searchAds();
});

document.querySelectorAll("[data-search]").forEach(btn=>{
 btn.addEventListener("click",()=>{
  $("#searchInput").value=btn.dataset.search;
  searchAds();
 });
});

$("#mobileMenuBtn").addEventListener("click",()=>{
 openModal(`
  <h2>Marketplace Menu</h2>
  <div class="menu-list">
   <a href="#home" class="menu-link">Home</a>
   <a href="#categories" class="menu-link">Categories</a>
   <a href="#latest" class="menu-link">Explore Ads</a>
   <a href="#how-it-works" class="menu-link">How it works</a>
   <button class="form-submit" id="menuSell">Post an Ad</button>
   <button class="outline-btn" id="menuLogin" style="width:100%">Login</button>
  </div>
 `);

 $("#menuSell").addEventListener("click",showSellForm);
 $("#menuLogin").addEventListener("click",showLogin);

 document.querySelectorAll(".menu-link").forEach(link=>{
  link.addEventListener("click",closeModal);
 });
});

$("#mobileChatsBtn").addEventListener("click",()=>{
 showLoginNotice("Login is required to access your private chats.");
});


// ==========================================
// MODAL EVENTS
// ==========================================

$("#modalClose").addEventListener("click",closeModal);

$("#modalOverlay").addEventListener("click",e=>{
 if(e.target===$("#modalOverlay")) closeModal();
});

document.addEventListener("keydown",e=>{
 if(e.key==="Escape") closeModal();
});


// ==========================================
// WHATSAPP FOLLOW POPUP
// ==========================================

function setupWhatsAppPopup() {

 if(sessionStorage.getItem("dmPopupClosed")) return;

 setTimeout(()=>{
  $("#whatsappPopup").hidden=false;
 },1800);

}

$("#popupClose").addEventListener("click",()=>{
 $("#whatsappPopup").hidden=true;
 sessionStorage.setItem("dmPopupClosed","yes");
});


// ==========================================
// INITIALIZE
// ==========================================

function initializeMarketplace() {

 $("#currentYear").textContent=new Date().getFullYear();

 renderCategories();
 renderHome();

 setupWhatsAppPopup();

 console.log("Digital Marketplace initialized.");

}

document.addEventListener("DOMContentLoaded",initializeMarketplace);
// WhatsApp Button Drag Function
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector(".whatsapp-popup");

    if (!btn) return;

    let dragging = false;
    let offsetX = 0;
    let offsetY = 0;

    btn.addEventListener("pointerdown", (e) => {
        const rect = btn.getBoundingClientRect();

        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;

        btn.style.left = rect.left + "px";
        btn.style.top = rect.top + "px";
        btn.style.right = "auto";
        btn.style.bottom = "auto";

        dragging = true;
        btn.setPointerCapture(e.pointerId);
        e.preventDefault();
    });

    btn.addEventListener("pointermove", (e) => {
        if (!dragging) return;

        btn.style.left = (e.clientX - offsetX) + "px";
        btn.style.top = (e.clientY - offsetY) + "px";
    });

    btn.addEventListener("pointerup", () => {
        dragging = false;
    });

    btn.addEventListener("pointercancel", () => {
        dragging = false;
    });
});
