document.getElementById('year').textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
},{threshold:0.2});
document.querySelectorAll('.hero, .product').forEach(el=>observer.observe(el));

document.querySelectorAll('.faq-question').forEach(q=>{
  q.addEventListener('click',()=>q.parentElement.classList.toggle('active'));
});

let lastScrollTop=0;
const header=document.getElementById('header');
window.addEventListener('scroll',()=>{
  let scrollTop=window.pageYOffset||document.documentElement.scrollTop;
  if(scrollTop>lastScrollTop+10){header.classList.add('hide');}
  else if(scrollTop<lastScrollTop-10){header.classList.remove('hide');}
  lastScrollTop=scrollTop<=0?0:scrollTop;
});

function buyProduct(name){
  const message=encodeURIComponent(`I want to buy a ${name}`);
  window.open(`https://t.me/cxmily?text=${message}`,'_blank');
}