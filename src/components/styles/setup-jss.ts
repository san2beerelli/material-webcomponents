import {create} from 'jss'
import preset from 'jss-preset-default'

class SetupJss{
    jss: any;
    sheet: any;
   constructor(){
       this.jss = create(preset())
   }
   attachStyleSheet(styles){
       this.sheet = this.jss.createStyleSheet(styles).attach()
   }
   getClassName(style: string | Array<string>){
       if(typeof style === 'string'){
           return this.sheet.classes[style]
       }
       let cNames = ''
       style.map((val)=> cNames += ` ${this.sheet.classes[val]}`)
       return cNames
   }
}
export default SetupJss