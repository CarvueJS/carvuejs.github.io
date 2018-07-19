
# Pagination

**Pagination** is used for splitting up content or data into several pages, with a control for navigating to the next or previous page.


## Examples

<Codepen codePenId="WKxgwP"></Codepen>

## Props/Slots

### ca-pagination props

| Name | Type | default | required |
| ------ | ----------- | ------ | -----|
| model   | Number  | 1 | no |
| prePage   | Number  | 5 | no | 
| numberOfItems   | Number  | 100 | no | 

### ca-pagination-item props

| Name | Type | default | required |
| ------ | ----------- | ------ | -----|
| selected   | Boolean  | false | no | 

### ca-pagination-item slots

| Name | Type | required |
| ------ | ----------- | ------ |
| default   | any | no |