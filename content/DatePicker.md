
# Date picker

**Date and time pickers** allow users to select a single or a range of dates and times.


## Examples

<CodeSnippet codePenId="MBeBJP"></CodeSnippet>

## Props/Slots

### ca-date-picker props

| Name | Type | default | required |
| ------ | ----------- | ------ | ------ |
| model   | any | null | yes |
| errorMessage   | String | 'Invalid date format.' | no | 
| placeholder   | String | 'mm/dd/yyyy' | no | 
| pattern   | String | '{1,2}/{1,2}/{4}' | no | 
| onUpdate   | Function | ()=>{}) | no | 

### ca-date-picker slots

| Name | Type | required |
| ------ | ----------- | ------ |
| default   | any | no |