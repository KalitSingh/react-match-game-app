## Important Observation 

(deep understanding)
- JS me:
- Normal function → this lose kar deta hai jab dusre component me pass hota hai
- Arrow function → this fix rehta hai (due to **lexical binding**)

- Tera function normal method hai → bind nahi hai → app crash

### Error Type and fix with example code 
- TypeError: Cannot read properties of undefined (reading 'state')
    at formattedTimeForUi (App.js)

### Fixing it 
Change this normal: formattedTimeForUi() {}
Into this Arrow function: formattedTimeForUi = () => {}

- then pass it to the < formattedTimeForUi={this.formattedTimeForUi} component/>, ok 

### Another way (best) 
- Pass function to the component in calling format like below 
- < time={this.formattedTimeForUi()} component/>, that sit, now use 'time' inside component code without calling 'time'


## New Concept: Preloading, a method to avoid delay in loading images in UI 
- Explanation: ise use karna mean hamare code pe present images ko jinhe event fire hone pe load hona hai UI me unhe event fire hone se
 pahle hi object ke ander push karke browser ke cache memory me load kara dena.

- syntax: 
```
const browserImgObj = new Image()
browserImgObj.src = "imgurl"
```
* Syntax Explanation: 
- **new Image()** ek browser object hai jise call kar ke ek empty object browser ke cache memory me create karte hai then 
- us object me **.src** ek key hoti hai specially image store karne ke liye byDefault so isi me event fire hone pe UI me load hone wali image or images(multiple images) ko app live hote hi store karwate lete hai browser cache me.

- Syntax for multiple image storing using preloading : bas for loop ke ander rakh do **new Image()** ko
```
imagesList.forEach((eachObj) => {
    const browserImgObj = new Image()
    browserImgObj.src = "imgurl"
})
```

* Noted Point: 
    - Only use it inside componentDidMount(){} method ok.
    - Use only when you have less number of images if you are using it for 1000 images then it will slow down your complete app
    - Its Replacement is : Lazy loading + using Transition effect at loading element in css



## react-router-dom (useNavigate())
- It is a another method to implement navigation used as a replaceble of <Link> child of react-router-dom. 
- ise implement karne ke liye import karne ke baad ise call/instanciate kardo 
- condition based event listner function ke ander use hota hai. eventListner wale html element pe ham path aasani se assign kar sakte hai 'useNavigate()' ke instance variable ko 'path' string form me pass kar do bas ho gaya ! 

- Like (Implemented in src/pages/InstructionPage) 

```
import {useNavigate} from "react-router-dom"

const navigate = useNavigate()

const onClickbtn = () => (isChecked ? navigate("/matchgame") : alert("pahle checkbox click karo!"))
```

- Note: jab useNavigate use karte hai to <Link> remove kar dete hai html element se


### Learned about vercel.json (vercel configuration file) 

* Learning of After Project Deployment on Vercel to fix error of not found 404 error while refreshing live project page

- It is used to instruct vercel server.

```json
{
  "routes": [
    { "src": "/(.*)", "dest": "/" }
  ]
}
```

* Explanation: 
- its mean live project me page refresh ho ya phir (koi new url path) "/(.*)" aaye to use "dest"(mean destination) use project ke "/" (yani index.html page pe server kardo (mean index.html page se load karo))

* After deploying flow of project app 
- Browser to vercel to your react code.

* Its problem: ye config code (due to "routes") blank page load kar deta hai, so its new version is 

```json
{
    "rewrites": [
        {"source": "/(*)", "destination": "/"}
    ]
}
```

* its explanation is same as above with a little difference 

**routes**: Every url request ko override kar deta hai mean ye har url request ko "/" (yani project ke only index.html file pe send kar deta hai inlcuding "/matchgame" path(main page of project ko bhi) ko bhi isilie blank page aa jata hai).

- ye old/deprecated outdated style hai isiliye "blank page load problem aati hai"

 🔁 **rewrites** : 
- ye best hai smoothly live page refresh pe same page load karke deta hai.
- page navigation fix karta hai only (no override) 

- rewrites (server-level redirect logic)
Server request ko internally change karta hai.
URL same rehta hai browser me but wo internally change ho jata hai
Mostly SPA fix ke liye use kiya jata hai.

👉 Example:

/about → / (internally "/" yani index.html file open hogi then "react-router-dom" ke according /about page show hoga)

(but browser shows /about)

* its flow :
/about → (vercel internal server) → / → React Router → About page


