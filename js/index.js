var weibo255 = new Vue({
  el: '#vue-home',
  data: {
    ruleForm: {
      id_num: '',
      name: '',
      phone_num: ''
    },
    activeIndex: '1',
    rules: {
      id_num: [{
          required: true,
          message: '请输入身份证号',
          trigger: 'blur'
        },
        {
          min: 18,
          max: 18,
          message: '请输入正确的18位身份证号',
          trigger: 'blur'
        }
      ],
      phone_num: [{
          required: true,
          message: '请输入手机号',
          trigger: 'blur'
        },
        {
          min: 11,
          max: 11,
          message: '请输入正确的11位手机号',
          trigger: 'blur'
        }
      ]
    }

  },
  mounted: function() {
    this.science();
  },
  methods: {
    science: function() {
      console.log('welcome to weibo 255 project');
    },
    handleSelect: function(key, keyPath) {
        console.log(key, keyPath);
      }
  }
})
