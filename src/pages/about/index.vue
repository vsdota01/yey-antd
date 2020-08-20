<template>
  <div id="about">
    <Container>
      <div class="abmain">
        <div class="abmain1t">
          <img src="../../assets/home/ab2.png" alt="" />
        </div>
        <div class="abmain3"></div>
        <div class="abmain2">
          <div class="p">
            <h5>加拿大国际学校艺术幼儿部简介</h5>
            <p>
              昆山加拿大国际学校艺术幼儿部是坐落在马鞍山西路1855号，总面积占地4000多平方米，拥有两栋独立教学楼，设有9个教学班，可容纳225名幼儿。
              紧邻康居示范小区，交通方便，空气质量优良。园内内部设计依照美式幼儿园配置规划，
              符合艺术双语国际幼儿专业色彩学的设计体系，完全符合环保质量，确保孩子在安全，舒适，整洁的环境中健康成长。
            </p>
            <p>
              艺术幼儿部依托昆山加拿大国际学校总部的管理及师资力量，结合本园实际，开展特色教学研究，实现管理科学化、制度化、系列化、专题化
            </p>
          </div>
          <div class="mor">
            MORE >
          </div>
        </div>
        <div class="abmain3t">
          <img src="../../assets/home/ab1.png" alt="" />
        </div>
      </div>
      <div>
        <h4>CISK办园目标</h4>
        <div class="hx"></div>
        <p class="bymb">
          艺术幼儿部依托昆山加拿大国际学校总部的管理及师资力量，严格遵循加拿大安大略省课程体系、中华人民共和国教育部《幼儿园教育指导纲要》、
          《3-6岁儿童学习与发展指南》精神，注重个性教学，珍视游戏和生活的独特价值，创设丰富的教育环境，合理安排一日活动，最大限度地支持和满足幼儿通过直接感知，
          实际操作和亲身体验获取经验的需要，“以整合性、自主性、适宜性的课程观为依据，开设与国内幼儿园同步的五大领域的主题教学课程，英语课程，以及英皇芭蕾舞蹈、
          乐高、跆拳道、合唱、小手大艺、软式棒球、足球、钢琴、小提琴等乐器技能练习的艺术课程，使孩子们在双语、艺术的表达;表现中获得创造和快乐。
        </p>
        <div class="flex flex-wrap flex-js-betw bymb-card">
          <div class="flex bymb-card-item flex-ai-center left">
            <div class="flex flex-col flex-center icon">
              <img src="../../assets/home/ab3.png" alt="" />
              <p>CISK办园目标</p>
            </div>
            <div class="flex flex-center flex1 text">
              尊重幼儿发展规律，尊重幼儿教育规律
            </div>
          </div>
          <div class="flex bymb-card-item flex-ai-center right">
            <div class="flex flex-col flex-center icon">
              <img src="../../assets/home/ab4.png" alt="" />
              <p>CISK办园理念</p>
            </div>
            <div class="flex flex-center flex1 text">
              特重每个幼儿的个性；发展每个幼儿的潜能；启发每个幼儿的创造。“打迪一所热情、阳光、快乐、和谐！最有爱的幼儿园！”，
              参与幼儿的精彩学习之旅，成为幼儿获取知识、培养创造力和全球惠识的创新型导师。
            </div>
          </div>
        </div>
        <div>
          <h4>CISK办园目标</h4>
          <div class="hx"></div>
          <div class="bymb-card flex flex-wrap flex-js-betw">
            <div class="flex flex-center xwlist-item">
              <img src="../../assets/home/al1.png" />
              <div class="flex flex-center flex-col">
                <p>艺术幼儿部园风</p>
                <p>阳光、快乐、合作、创新</p>
              </div>
            </div>
            <div class="flex flex-center xwlist-item">
              <img src="../../assets/home/al2.png" />
              <div class="flex flex-center flex-col">
                <p>艺术幼儿部园风</p>
                <p>阳光、快乐、合作、创新</p>
              </div>
            </div>
            <div class="flex flex-center xwlist-item">
              <img src="../../assets/home/al3.png" />
              <div class="flex flex-center flex-col">
                <p>艺术幼儿部园风</p>
                <p>阳光、快乐、合作、创新</p>
              </div>
            </div>
            <div class="flex flex-center xwlist-item">
              <img src="../../assets/home/al4.png" />
              <div class="flex flex-center flex-col">
                <p>艺术幼儿部园风</p>
                <p>阳光、快乐、合作、创新</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>
<script>
import Container from "@/components/Container.vue";
import "./about.less";
export default {
  data() {
    return {};
  },
  components: {
    Container,
  },
  created(){
    this.$root.menuIndex = 1
  }
};
</script>
