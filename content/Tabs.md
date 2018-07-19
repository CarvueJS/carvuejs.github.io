
# Tabs

**Tabs** are used to quickly navigate between views within the same context.


## Examples

<Codepen codePenId="XBKPRd"></Codepen>

## Props/Slots

### ca-tabs slots

| Name | Type | required |
| ------ | ----------- | ------ |
| nav   | ca-tabs-nav | no |
| panel   | ca-tabs-panel | no |

### ca-tabs-nav props

| Name | Type | default | required |
| ------ | ----------- | ------ | -----|
| controls   | String  | '' | no |
| selected   | Boolean  | false | no | 
| tabID   | String  | '' | no | 

### ca-tabs-nav slots

| Name | Type | required |
| ------ | ----------- | ------ |
| default   | any | no |

### ca-tabs-panel props

| Name | Type | default | required |
| ------ | ----------- | ------ | -----|
| PanelID   |  String | '' | no |
| labelledby   | String  | '' | no | 
| hidden   | Boolean  | true | no | 
| ariaHidden   | Boolean  | true | no | 
| tabID   | String  | '' | no | 

### ca-tabs-panel slots

| Name | Type | required |
| ------ | ----------- | ------ |
| default   | any | no |