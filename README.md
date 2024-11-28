### Vue3 Slots 
<code> content.vue<code>
```javascript
    <template>
        <h1>LESSON 5</h1>
    </template>
```

<code> App.vue<code/>
```javascript
    <template>
       <Content>
        <slots/>
       </Content>
    </template>

import Content from '../component/content.vue';
```

![alt text](image.png)



### Props

<code> content.vue<code/>
```javascript
    <template>
        <slots str="LESSON-5"/>
    </template>
```

<code> App.vue<code>
```javascript
    <template>
       <Content v-slot="props">
        <h1>LESSON 5 {{props.str}}</h1>
       </Content>
    </template>

import Content from '../component/content.vue';

```
![alt text](image-1.png)

![alt text](image-2.png)

