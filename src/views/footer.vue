<template>
    <div>
        <footer>
            <section>
                <div id="logofooter">
                    <img src="../assets/logo-white.png">
                </div>
                <div id="fnav">
                    <router-link class=fmenu to="/">Home</router-link>
                    <router-link class=fmenu to="/about">About</router-link>
                    <router-link class=fmenu to="/References">References</router-link>
                    <router-link class=fmenu to="/Calculator">Calculator</router-link>
                    <router-link class=fmenu to="/Contact">Contact</router-link>
                </div>
                <div class='text' id=socials>Sign up for the newsletters in RK Expo
                    <form action="/action_page.php">
                        <label for="fname">email</label>
                        <input type="text" id="fname" name="firstname" placeholder="Enter your email address">
                    </form>
                </div>
            </section>
            <div class='text'>© 2021 RK EXPO |  IČ: 08322279    Privacy Policy | Cookie Policy | Terms of use </div>
        </footer>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
footer{
    height: 650px;
    background-color: black;
}

section{
    align-content: space-between;
    justify-content: center;
    display: flex;
    margin: auto;
    padding-top: 120px;
}

img{
    height: 370px;
}

.text{
    color:white
}

#fnav{
    width: 150px;
    display: block;
    justify-content: space-around;
    margin-left: 50px;
    size: 28px;
    padding-left: 400px;
    padding-right: 400px;
}

.fmenu{
    color: white;
    align-content: space-between;
    display: flex;
    justify-content: center;
    padding-top: 30px;
}

#socials{
    margin-left: 50px;
}
</style>