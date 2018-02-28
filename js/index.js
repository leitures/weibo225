var weibo255 = new Vue({
  el: '#vue-home',
  data: {
    ruleForm: {
      id_num: '',
      name: '',
      phone_num: ''
    },
    activeIndex: 'list',
    pageContent: 'list',
    tableData: [],
    tableData2: [],
    keyword: '',
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
    this.getAllUserData();
  },
  methods: {
    handleSelect: function(key, keyPath) {
      var that = this;
      this.pageContent = key;
      console.log(key, keyPath);
    },
    getAllUserData: function() {
      var that = this;
      axios.get(config.host + '/all_users').then(function(res) {
        console.log(res.data.data.length);
        for (let i = 0; i < res.data.data.length; i++) {
          var tempData = {
            originId: res.data.data[i].originId,
            currentId: res.data.data[i].currentId,
            pageUrl: res.data.data[i].pageUrl
          }
          that.tableData.push(tempData)
        }
      })
    },

    clickSearch: function() {
      var that = this;
      axios({
        method: 'get',
        url: config.host + '/search_user',
        params: {
          keyword: that.keyword
        }
        // withCredentials: true
      }).then(function(res) {
        for (let i = 0; i < res.data.data.length; i++) {
          var tempData = {
            originId: res.data.data[i].originId,
            currentId: res.data.data[i].currentId,
            pageUrl: res.data.data[i].pageUrl
          }
          that.tableData2.push(tempData)
        }
      });
    },

    openPageUrl: function(pageUrl) {
      window.location.href = pageUrl;
    },
  }
})
