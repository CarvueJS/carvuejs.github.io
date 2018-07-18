
# Radio button

**Radio buttons** are used when a list of two or more options are mutually exclusive, meaning the user must select only one option.


## Examples

<CodeSnippet codePenId="zLBJoq"></CodeSnippet>

## Props/Slots

### ca-radio slots

| Name | Type | required |
| ------ | ----------- | ------ |
| default   | ca-radio-item | no |

### ca-radio-item props

| Name | Type | default | required |
| ------ | ----------- | ------ | -----|
| model   |  any | null | no |
| inputValue   |  any | null | no | 
| checked   | Boolean  | false | no | 
| disable   | Boolean  | false | no | 
| tabIndex   | Number  | 0 | no | 
| radioID   | String  | '' | no | 

### ca-radio-item slots

| Name | Type | required |
| ------ | ----------- | ------ |
| default   | any | no |