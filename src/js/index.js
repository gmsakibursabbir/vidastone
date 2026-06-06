// header start

const toggle = document.getElementById('menu-toggle');
const drawer = document.getElementById('mobile-drawer');
const backdrop = document.getElementById('backdrop');
const closeBtn = document.getElementById('drawer-close');
let isOpen = false;

function openDrawer() {
  isOpen = true;
  drawer.classList.add('open');
  backdrop.classList.add('open');
  toggle.classList.add('menu-open');
  toggle.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}

function closeDrawer() {
  isOpen = false;
  drawer.classList.remove('open');
  backdrop.classList.remove('open');
  toggle.classList.remove('menu-open');
  toggle.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

toggle.addEventListener('click', () => (isOpen ? closeDrawer() : openDrawer()));
closeBtn.addEventListener('click', closeDrawer);
backdrop.addEventListener('click', closeDrawer);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && isOpen) closeDrawer();
});

 const header = document.getElementById('main-header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('active-nav', window.scrollY > 100);
  }, { passive: true });

  // header end 
  

   const lenis = new Lenis({
      lerp: 0.07,
      smoothWheel: true,
      syncTouch: true,
      wheelMultiplier: 1,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);