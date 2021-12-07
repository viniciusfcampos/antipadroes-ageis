import { Status } from '../utils/enums/Status'

const theme = {
  colors: {
    background: 'hsl(200, 40%, 95%)',
    lightBackground: 'hsl(200, 10%, 95%)',
    hover: 'hsla(200, 10%, 95%, 40%)',
    darkBackground: 'hsl(200,20%,90%)',
    primary: 'hsl(220, 60%, 60%)',
    secondary: 'hsl(220, 10%, 55%)',
    text: 'hsl(200, 10%, 35%)',
    lightText: 'hsl(220, 25%, 75%)',
    status: {
      [Status.backlog]: '#4B88BD',
      [Status.prioritazed]: '#50B1AB',
      [Status.doing]: '#FCBD58',
      [Status.done]: '#4BBD75'
    }
  }
}

export default theme
