<template>
  <div class="hello">
    <h3>izy UI Widgets Demos</h3>
    <Menu mode="horizontal" theme="light" active-name="1">
      <MenuItem name="1">
        内容管理
      </MenuItem>
      <MenuItem name="2">
        用户管理
      </MenuItem>
      <Submenu name="3">
        <template slot="title">
          统计分析
        </template>
        <!--<MenuGroup title="使用">-->
          <MenuItem name="3-1">新增和启动</MenuItem>
          <MenuItem name="3-2">活跃分析</MenuItem>
          <MenuItem name="3-3">时段分析</MenuItem>
        <!--</MenuGroup>-->
        <!--<MenuGroup title="留存">-->
          <MenuItem name="3-4">用户留存</MenuItem>
          <MenuItem name="3-5">流失用户</MenuItem>
        <!--</MenuGroup>-->
      </Submenu>
      <MenuItem name="4">
        综合设置
      </MenuItem>
    </Menu>
    <section>
      <Card class="navCard">
        <h4 slot="title">这是标题</h4>
        <a href="#" slot="extra">
          change
        </a>
        <p>这是body</p>
        <p>这是body1</p>
      </Card>
      <Card class="navCard">
        <h4 slot="title">这是标题</h4>
        <p>这是body222222</p>
        <p>这是body1</p>
      </Card>
      <Card class="navCard">
        <h4 slot="title">这是标题</h4>
        <p>这是body</p>
        <p>这是body1</p>
      </Card>
    </section>

    <section>
      <div id="parent" style="height: 100px; width: 200px;" v-loading="loading" izy-loading-text="loading 1.2.3...">
        <p>Test Loading Area.
        Test Loading Area1.
        Test Loading Area1.
        Test Loading Area.
        Test Loading Area.
        Test Loading Area.
        Test Loading Area.
        </p>
      </div>
      <button @click="loading=true">Start loading</button>
      <button @click="loading=false">Stop loading</button>
    </section>

    <section>
      <div>
        <Select v-model="select1" style="width:200px;">
          <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        <span>Selected Value: [{{select1}}]</span>
      </div>
      <div>
        <Select v-model="select2" filterable style="width: 200px;">
          <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        <span>Selected Value: [{{select2}}]</span>
      </div>
        <div>
          <Select v-model="select3" filterable multiple>
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
          <span>Selected Value: [{{select3}}]</span>
        </div>
    </section>

    <section>
      <div>
        <h5>Single checkbox</h5>
        <label>{{singleCheckbox}}</label>
        <Checkbox v-model="singleCheckbox">Checkbox</Checkbox>
      </div>
      <div>
        <h5>Checkbox Group</h5>
        <label>{{social}}</label>
        <CheckboxGroup v-model="social">
          <Checkbox label="twitter">
            <span>Twitter</span>
          </Checkbox>
          <Checkbox label="facebook">
            <span>Facebook</span>
          </Checkbox>
          <Checkbox label="github">
            <span>Github</span>
          </Checkbox>
          <Checkbox label="snapchat">
            <span>Snapchat</span>
          </Checkbox>
        </CheckboxGroup>
        <label>{{fruit}}</label>
        <CheckboxGroup v-model="fruit">
          <Checkbox label="香蕉"></Checkbox>
          <Checkbox label="苹果"></Checkbox>
          <Checkbox label="西瓜"></Checkbox>
        </CheckboxGroup>
      </div>
    </section>

    <section>
      <div>
        <h5>Single radio</h5>
        <label>{{singleRadio}}</label>
        <Radio v-model="singleRadio">Radio</Radio>
      </div>
      <div>
        <RadioGroup v-model="phone">
          <Radio label="apple">
            <span>Apple</span>
          </Radio>
          <Radio label="android">
            <span>Android</span>
          </Radio>
          <Radio label="windows">
            <span>Windows</span>
          </Radio>
        </RadioGroup>
        <label>{{phone}}</label>
      </div>
      <div>
        <RadioGroup v-model="animal">
          <Radio label="金斑蝶"></Radio>
          <Radio label="爪哇犀牛"></Radio>
          <Radio label="印度黑羚"></Radio>
        </RadioGroup>
        <label>{{animal}}</label>
      </div>
    </section>

    <section>
      <Button type="primary" @click="modal1 = true">Display dialog box</Button>
      <Modal
        v-model="modal1"
        title="Common Modal dialog box title"
        @on-ok="ok"
        @on-cancel="cancel">
        <p>Content of dialog</p>
        <p>Content of dialog</p>
        <p>Content of dialog</p>
      </Modal>
    </section>

    <section>
      <Button @click.native="info">显示普通提示</Button>
    </section>

    <back-to-top :visibleoffset="visibleoffset" :text="text" :bottom="bottom" :right="right" />

  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    const min = new Date(2017, 5, 1, 0, 0, 0)
    const max = new Date(2017, 8, 30, 0, 0, 0)
    const now = new Date()
    return {
      visibleoffset: 200,
      text: 'Back',
      bottom: '40px',
      right: '40px',
      msg: 'Welcome to Your Vue.js App',
      select1: '',
      select2: '',
      select3: [],

      singleCheckbox: false,
      social: [],
      fruit: [],

      singleRadio: false,
      animal: '',
      phone: '',

      loading: true,

      modal1: false,

      cityList: [
        {
          value: 'New York',
          label: 'New York'
        },
        {
          value: 'London',
          label: 'London'
        },
        {
          value: 'Sydney',
          label: 'Sydney'
        },
        {
          value: 'Ottawa',
          label: 'Ottawa'
        },
        {
          value: 'Paris',
          label: 'Paris'
        },
        {
          value: 'Canberra',
          label: 'Canberra'
        }
      ],

      time: min,
      now,
      min,
      max,
      timeRange: [min, max],
      local: {
        dow: 4, // Sunday is the first day of the week
        hourTip: 'Select Hour', // tip of select hour
        minuteTip: 'Select Minute', // tip of select minute
        secondTip: 'Select Second', // tip of select second
        yearSuffix: '', // suffix of head
        monthsHead: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'), // months of head
        months: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'), // months of panel
        weeks: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'), // weeks,
        cancelTip: 'Cancel', // text for cancel button for daterange picker
        submitTip: 'Submit' // text for submit button for daterange picker
      }
    }
  },
  methods: {
    ok () {
      alert('Clicked ok');
    },
    cancel () {
      alert('Clicked cancel');
    },
    info () {
      this.$Message.success({
        content: '这是一条普通提示2',
        duration: 500,
        onClose () {
              console.log('on close');
        },
        closable: true
      })
    },
    disabledDate (time) {
      return time < this.min || time > this.max
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

/*li {*/
  /*display: inline-block;*/
  /*margin: 0 10px;*/
/*}*/

a {
  color: #42b983;
}

.navCard {
  width: 350px;
  margin-right:2%;
}
section {
  text-align: left;
  margin: 10px 0;
  padding: 20px;
  border-bottom: 1px #f1f1f1 solid;
  /*background: rgb(238, 238, 238);*/
}
  section .izy-select {
    width: 200px;
  }
</style>
