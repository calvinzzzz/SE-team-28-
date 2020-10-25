var v=new Vue({
    data:{
        users:[{
            username:'ivan',
            password:'123456',
            userimg:'userLogin.jpg'
        },{
            username:'calvin',
            password:'123456',
            userimg:'userLogin.jpg'
        },{
            username:'simon',
            password:'123456',
            userimg:'userLogin.jpg'
        },{
            username:'joshua',
            password:'123456',
            userimg:'userLogin.jpg'
        }],
        currentUser:{username:'',userimg:''},
        loginStatus:false,
        registerStatus:false,
        userbarStatus:false,
        lrBtnStatus:true
    },
    methods:{
        //login
        showLogin:function(){
            document.getElementById("login"),reset()
            this.loginStatus=true
            this.registerStatus=false
        },
        //register
        showRegister:function(){
            document.getElementById("register"),reset()
            this.loginStatus=false
            this.registerStatus=true
        },
        //logout
        logout:function(){
            this.currentUser.username=''
            this.currentUser.userimg=''
            alert('log out suscess!');
            this.userbarStatus=false;
            this.lrBtnStatus=true;
        },
        //cover
        loginBoxClick:function(){
            this.loginStatus=false
        },
        registerBoxClick:function(){
            this.registerStatus=false
        },
        stopProp:function(e){
            e=e||event;
            e.stopPropagation()
        },
        login:function(){
            var username=$('.login-box').find('.userbane').val();
            var psw=$('login-box').find('.psw').val();
            var flag=false;
            for (var i=0;i<this.users.length;i++){
                if(this.users[i].username==username && this.users[i].password==psw){
                    flag=true;
                    alert('login suscess')
                    this.loginStatus=false;
                    this.userbarStatus=true;
                    this.currentUser.username=this.users[i].username;
                    this.currentUser.userimg=this.users[i].userimg;
                    this.lrBtnStatus=false;
                    break;
                }
            }
            if(!flag){
                alert('wrong password')
                document.getElementById('login').reset()
            }
        }
   
    }
})