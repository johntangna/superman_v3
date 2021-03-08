<template>
  <div class="dashboard-container">
    <!--    <div class="dashboard-text">name: {{ name }}</div>
    <div class="dashboard-text">roles: <span v-for="role in roles" :key="role">{{ role }}</span></div>-->
    <div class="dashboard-text">可用组件库</div>

    <div style="display: flex">
      <ul>
        <li>
          1. AddressSelect 地址级联下拉菜单
          <AddressSelect style="width: 240px;" size="mini" :value="['江苏省','连云港市','东海县']"/>
        </li>
        <li>2. AddressTree 地址树</li>
        <li>3. BrandSelect 品牌下拉菜单</li>
        <li>4. CombinSelectModal 组合装选择弹窗</li>
        <li>5. CommonSelect 通用下拉菜单</li>
        <li>6. DicSelector 字典下拉菜单</li>
        <li>7. dynamicTable 动态表格</li>
        <li>8. ExpressSelect 物流下拉菜单</li>
        <li>9. FreezingReasonSelect 冻结原因下拉菜单</li>
        <li>10. goodClassTreeModal 货品分类树</li>
        <li>11. GoodsClassSelect 货品分类下拉菜单</li>
        <li>12. NoteTable 带便签的动态表格</li>
        <li>13. omspage 独立分页组件</li>
        <li>14. OrderMarkingSelect 订单标记下拉菜单</li>
        <li>15. OrderPackageSelect 订单包装下拉菜单</li>
        <li>16. ShopSelect 店铺下拉菜单</li>
        <li>17. SpecSelectModal 单品选择弹窗</li>
        <li>18. UserSelect 用户下拉菜单</li>
        <li>19. WareHouseSelect 仓库下拉菜单</li>
        <li>
          20. commentInput 备注/评论 等长文本弹出输入组件 <span style="color:#ffffff;font-size: 10px;background-color: #ed4014;padding: 2px;">new</span>
          <span style="width: 150px"><comment-input style="width: 180px;" size="mini" /></span>
        </li>
      </ul>
      <div>
        <img alt="" class="oms-logo" src="@/assets/可用组件库.png" style="width: 235px">
      </div>

      <div class="user-bio">
        <div class="user-bio-top">
          <div class="circle-red"></div>
          <div class="circle-yellow"></div>
          <div class="circle-green"></div>
        </div>
        <div class="user-bio-body">
          Wait,i know you<br>
          keep hungry keep foolish<br>
          新弹窗样式<br>
          欧美斯订单系统<br>
          欧美斯订单系统<br>
          欧美斯订单系统<br>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CommentInput from '@/components/commentInput/index';
import AddressSelect from '@/components/AddressSelect/index';

export default {
  name: 'Dashboard',
  components: { AddressSelect, CommentInput },
  data() {
    return {
      c: undefined
    }
  },
//   mounted() {
//     var context = document.getElementById('canv').getContext('2d');
// // 设置字体
//     context.font = '18px bold 黑体';
// // 设置颜色
//     context.fillStyle = '#ff0';
// // 设置水平对齐方式
//     context.textAlign = 'center';
// // 设置垂直对齐方式
//     context.textBaseline = 'middle';
// // 绘制文字（参数：要写的字，x坐标，y坐标）
//     context.fillText('要写的文字', 100, 100);
//   },
  computed: {
    ...mapGetters([
      'name',
      'roles'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    padding: 30px;
    height: 100%;
    overflow: auto;
  }

  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
.dashboard-container ul li {
  list-style: none;
  font-size: 14px;
  margin: 10px;
}

.dashboard-container ul li:hover {
}
</style>
<style>
.user-bio {
  font-size: 14px;
  color: #6a737d;
  position: absolute;
  top: 50%;
  left: 50%;
  box-shadow: 0 0 12px 0px rgba(0,0,0,0.2);
}
.user-bio .user-bio-top {
  /*height: 15px;*/
  background-color: #E3E3E3;
  padding: 8px 12px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  display: flex;
}
.user-bio .user-bio-body {
  /*background-color: #EEEEEE;*/
  width: 100%;
  font-size: 13px;
  color: #666666;
  overflow: auto;
  padding: 20px;
  font-family: "Source Code Pro", Consolas, Menlo, Monaco, "Courier New", monospace;
}
.user-bio .user-bio-top div{
  margin-right: 10px;
  width:13px;
  height:13px;
  background-color:#FF5F57;
  border-radius:50px;
}
.user-bio .user-bio-top .circle-yellow{
  margin-right: 10px;
  width:13px;
  height:13px;
  background-color:#FFBD2E;
  border-radius:50px;
}
.user-bio .user-bio-top .circle-green{
  margin-right: 10px;
  width:13px;
  height:13px;
  background-color:#28CA42;
  border-radius:50px;
}
</style>
