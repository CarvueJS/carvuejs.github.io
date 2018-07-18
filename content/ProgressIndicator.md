
# Progress indicator

**Progress Indicator** is a visual representation of a users progress through a set of steps. They guide the user through a number of steps in order to complete a specified process.


## Examples

<CodeSnippet codePenId="qyNMar"></CodeSnippet>

## Props/Slots

### ca-progress-indicator props

| Name | Type | default | required |
| ------ | ----------- | ------ | -----|
| model   |  Number | 0 | no | 

### ca-progress-indicator slots

| Name | Type | required |
| ------ | ----------- | ------ |
| default   | ca-progress-indicator-step | no |

### ca-progress-indicator-step props

| Name | Type | default | required |
| ------ | ----------- | ------ | -----|
| isCompleted   | Boolean  | false | no | 
| isInComplete   | Boolean  | true | no | 
| isCurrent   | Boolean  | false | no | 

### ca-progress-indicator-step slots

| Name | Type | required |
| ------ | ----------- | ------ |
| default   | any | no |