<template>
  <div class="box" v-for="card in Cart_item" v-bind:key="card.id">
    <article class="media">
      <div class="media-left">
        <img :src="card.image" alt="Image" class="image is-128x128" />
      </div>
      <div class="media-content" style="margin-left: 900px">
        <div class="content">
          <p>
            <strong>ชื่อหนังสือ: {{ card.Book_name }}</strong>
            <br />
            <small>ราคา: {{ card.price }}</small>
          </p>
        </div>
        <div class="level-right">
          <a class="level-item">
            <span class="icon is-small">
              <i class="fa fa-trash" style="color: #ac3b61"></i>
            </span>
          </a>
        </div>
      </div>
    </article>
  </div>
</template>
<script>
export default {
  name: "CartItem",
  data() {
    return {
      Cart_item: [
        {
          id: 0,
          Book_name: "Exorcist wa Otosenai ",
          Pen_name: "Apple",
          price: 100,
          is_favorite: false,
          Book_type: ["comedy", "Romance"],
          image:
            "https://www.memuplay.com/blog/wp-content/uploads/2021/02/Blue-Archive-image.png",
          detail_book:
            " เด็กหนุ่มผู้ถูกรับเลือกจากพระเจ้าให้กลายเป็นเอ็กซอร์ซิสผู้แข็งแกร่งที่สุดซึ่งมีหน้าที่ในการปราบจอมมาร ได้พบเจอกับเด็กสาวผู้หนึ่ง จนเกิดเป็นเรื่องราวแห่งความรักและความหวัง ",
        },
        {
          id: 1,
          Book_name: "Exorcist ",
          Pen_name: "Mookie",
          price: 500,
          is_favorite: false,
          Book_type: ["comedy", "Romance"],
          image:
            "https://s3.ap-southeast-1.amazonaws.com/media.fictionlog/books/6180e02cfe7fc6001c6aa377/6180e3deW0XxPAGh.jpeg",
          detail_book:
            " เด็กหนุ่มผู้ถูกรับเลือกจากพระเจ้าให้กลายเป็นเอ็กซอร์ซิสผู้แข็งแกร่งที่สุดซึ่งมีหน้าที่ในการปราบจอมมาร ได้พบเจอกับเด็กสาวผู้หนึ่ง จนเกิดเป็นเรื่องราวแห่งความรักและความหวัง ",
        },
      ],
    };
  },
};
</script>
<style lang="">
</style>