
(function(){
  const forms=document.querySelectorAll('[data-blog-search]');
  forms.forEach(form=>{
    const input=form.querySelector('[data-blog-query]');
    const grid=document.querySelector('[data-blog-grid]');
    if(!input||!grid)return;
    const cards=[...grid.querySelectorAll('[data-blog-card]')];
    const empty=document.querySelector('[data-blog-empty]');
    function filter(){const q=input.value.trim().toLowerCase();let shown=0;cards.forEach(c=>{const ok=!q||c.dataset.title.includes(q)||c.dataset.category.includes(q);c.hidden=!ok;if(ok)shown++;});if(empty)empty.hidden=shown!==0;}
    input.addEventListener('input',filter);form.addEventListener('submit',e=>{e.preventDefault();filter();});
  });
})();
