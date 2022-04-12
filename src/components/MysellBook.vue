<template lang="">
   <div class="container">
        <div class=" columns is-multiline">
          <div v-for="card in Book_list" v-bind:key="card.id" class="column is-3">
            <div class="card large" >
              <div class="card-image  image is-1by1">
                  <img :src="card.image" alt="Image">
              </div>
              <div class="card-content" style="height: 210px">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-5 no-padding">{{card.Book_name}}</p>
                    ชื่อนามปากของคุณ:
                      <span class="title is-6 "  style="color: #bab2b5">
                         {{card.Pen_name}}</span> 
                                 <br>     ปรเภทหนังสือที่เลือกไว้:
                    <span
                      class="is-size-6 text-right"
                      style="color: #bab2b5"
                      v-for="(value, index) in card.Book_type"
                      :key="index"
                    >
                      {{ value }}&nbsp;
                    </span>
                    <br>ราคาที่เลือก: <span style="color: #bab2b5" >{{card.price}}</span>
                          <br>    สถานะหนังสือ:   <span style="color: #bab2b5">เขียนเสร็จแล้ว</span>
                  </div>
                         

                </div>
           
              </div>
                 <footer class="card-footer">
                      <a class="card-footer-item">ลบหนังสือที่เขียน</a>
                </footer>
            </div>
          </div>
      </div>
    </div>
</template>
<script>
export default {
  name: "MysellBook",
  data() {
    return {
      Book_list: [
        {
          id: 0,
          Book_name: "Exorcist wa Otosenai ",
          Pen_name: "Apple",
          price: 100,
          is_favorite: false,
          Book_type: ["comedy", "Romance"],
          image:
            "https://i0.wp.com/anitrendz.net/news/wp-content/uploads/2021/08/princess-connect-redive-season-2-trailer-screenshot.png",
          detail_book:
            " เด็กหนุ่มผู้ถูกรับเลือกจากพระเจ้าให้กลายเป็นเอ็กซอร์ซิสผู้แข็งแกร่งที่สุดซึ่งมีหน้าที่ในการปราบจอมมาร ได้พบเจอกับเด็กสาวผู้หนึ่ง จนเกิดเป็นเรื่องราวแห่งความรักและความหวัง ",
        },
        {
          id: 1,
          Book_name: "This Is the Memory Until the Girl ",
          Pen_name: "Apple",
          price: 120,
          is_favorite: false,
          Book_type: ["comedy", "Drama"],
          image:
            "https://skilfulgamer.com/wp-content/uploads/2022/02/genshin-impact-original-art-from-website_11zon-1.jpg",
          detail_book:
            "  เด็กสาวผู้มีปัญหาในการเข้าสังคม ที่ได้พบกับเพื่อนสนิทที่รู้จักกันผ่านทางเกมออนไลน์ จนพัฒนาความสัมพันธ์จนไปเป็นคนรักในที่สุด เรื่องนี้ฟีลกู๊ดล้วนๆครับ ออกแนวความสัมพันธ์พระนาง น่ารักกุ๊กกิ๊ก นางเอกมีปัญหาเรื่องสนทนากับคนทั่วไปแบบโคมิเลย ต้องใช้มือถือช่วยพูด พระเอกเลยมีเวลาโชว์ความสุภาพบุรษ จนความรู้สึกค่อยๆเปลี่ยนไปครับ",
        },
        {
          id: 2,
          Book_name: "Vintage Model Car",
          Pen_name: "Apple",
          price: 150,
          is_favorite: false,
          Book_type: ["Action", "Romance"],
          image:
            "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
          detail_book: "บลาๆ",
        },
      ],
    };
  },
};
</script>
<style lang="">
</style>