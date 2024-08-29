
// navの固定
window.addEventListener('scroll', function() {
  var navwrap = document.getElementById('navwrap');
  var scrollPosition = window.scrollY || window.pageYOffset;

  // スクロール位置がページの高さを超えたらnavを表示して固定
  if (scrollPosition > window.innerHeight) {
    navwrap.classList.add('fixed');
  } else {
    navwrap.classList.remove('fixed');
  }
});




document.addEventListener('DOMContentLoaded', function () {
  const itemsPerPage = 10; // 1ページあたりの表示アイテム数
  const newsContainers = document.querySelectorAll('#news-wrap .news-container');
  const totalPages = Math.ceil(newsContainers.length / itemsPerPage);
  let currentPage = 1;

  function showPage(page) {
    newsContainers.forEach((container, index) => {
      container.style.display = (index >= (page - 1) * itemsPerPage && index < page * itemsPerPage) ? 'block' : 'none';
    });

    document.getElementById('prev').disabled = page === 1;
    document.getElementById('next').disabled = page === totalPages;

    // ページ番号を更新
    const pageNumbers = document.getElementById('page-numbers');
    if (pageNumbers) {
      pageNumbers.innerHTML = `ページ ${page} / ${totalPages}`;
    }
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  // ページ切り替えボタンのイベントリスナー
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');

  if (prevButton && nextButton) {
    prevButton.addEventListener('click', function () {
      if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
        scrollToTop();
      }
    });

    nextButton.addEventListener('click', function () {
      if (currentPage < totalPages) {
        currentPage++;
        showPage(currentPage);
        scrollToTop();
      }
    });
  }

  // 初期表示
  showPage(currentPage);
});




document.addEventListener('DOMContentLoaded', () => {
  const itemsPerPage = 10; // 1ページに表示するアイテム数
  const liveContainers = document.querySelectorAll('.live-container');
  const pageCount = Math.ceil(liveContainers.length / itemsPerPage);
  let currentPage = 1;

  // ページ切り替え
  function goToPage(page) {
      currentPage = page;
      const start = (currentPage - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      liveContainers.forEach((container, index) => {
          container.style.display = (index >= start && index < end) ? 'block' : 'none';
      });
      updatePaginationButtons();
      updatePageNumber();
      scrollToTop();
  }

  // ページネーションボタンの更新
  function updatePaginationButtons() {
      document.getElementById('prev').disabled = currentPage === 1;
      document.getElementById('next').disabled = currentPage === pageCount;
  }

  // 現在のページ番号を更新
  function updatePageNumber() {
      document.getElementById('page-numbers').textContent = `ページ ${currentPage} / ${pageCount}`;
  }

  // ページトップへ移動
  function scrollToTop() {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  }

  // 初期表示
  document.getElementById('prev').addEventListener('click', () => {
      if (currentPage > 1) {
          goToPage(currentPage - 1);
      }
  });
  document.getElementById('next').addEventListener('click', () => {
      if (currentPage < pageCount) {
          goToPage(currentPage + 1);
      }
  });

  // 初期ページを1に設定して表示
  goToPage(1);
});





