<template>
    <div>
        <footer>
            <section id='first'>
                <div class='smallcontainer' id='logo'>
                        <img alt="Vue logo" src="../assets/logo-white.png">
                </div>
                <div class='smallcontainer' id='fnav'>
                    <div class='nav'>
                        <router-link class='menu' to="/">Home</router-link>
                        <router-link class='menu' to="/about">About</router-link>
                        <router-link class='menu' to="/References">References</router-link>
                        <router-link class='menu' to="/Calculator">Calculator</router-link>
                        <router-link class='menu' to="/Contact">Contact</router-link>
                    </div>
                </div>
                <div class='smallcontainer' id='socials'>
                        <div class='nav'>
                            <div id="text">Sign up for the newsletters in RK Expo</div>
                        <div class='eform'>
                            <form action="/action_page.php">   
                            <div class='eformbox'><input type="text" id="fname" name="firstname" placeholder="Enter your email address"></div>
                            <div class='eformbox'><label for="fname">Email</label></div>
                            </form>
                        </div>
                        <div class='eform'>
                            <div class='test'></div>
                            <button> Sign up</button>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            </section>
            <section id='second'>
                <div>© 2021 RK EXPO |  IČ: 08322279    Privacy Policy | Cookie Policy | Terms of use</div>
            </section>
        </footer>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
footer{
    height:650px;
    width: 100%;
    background-color: black;
    color: white;
}

#first{
    height:500px;
    width: 100%;
    background-color: darkblue;
    display: flex;
}

#second{
    height:150px;
    width: 100%;
    background-color:red;
}

.smallcontainer{
    width:640px;
    height:500px;
}

#logo{
    background-color: blue;
}

img{
    height: 368px;
    width: 332px;
    padding-top:70px;
}

#fnav{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: brown;
}

.nav{
    height:450px;
    width:400px;
    display: block;
    justify-content: space-around;
    padding-top: 150px;
    
}

.menu{
    display: block;
    justify-content: space-around;
    height: 50px;
    width: 400px;
}


#socials{
    background-color: chartreuse;
    display: flex;
    justify-content: center;
    align-items: center;
}

.eform{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 400px;
    height: 150px;
}

#text{
    color: white
}

.eformbox{
    height: 50px;
    width: 150px;
    background-color: red;
    float: right;
}
</style>