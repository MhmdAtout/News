$(document).ready(function () {
  $.ajax({
    url: "http://localhost/News/backend/get_all.php",
    success: function (res) {
      let result = JSON.parse(res);
      result.news.forEach((news) => {
        $("#page").append(`
        <div class="news-card flex column jc-start ai-start">
          <div class="news-title">
            <p class="g news_title">${news.title}</p>
          </div>
          <div class="news-category">
            <p class="g news_category">${news.category}</p>
          </div>
          <div class="news-description">
            <p class="g news_description">${news.description}</p>
          </div>
        </div>
            `);
      });
    },
  });
});
