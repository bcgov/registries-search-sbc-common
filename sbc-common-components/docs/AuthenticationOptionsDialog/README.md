# Authentication Options Dialog Component

Authentication options dialog component.
can be used as a component in a page for showing multiple authentication options.
### Prerequisites

 [How To Install the dependency](../install/README.md) 


 
## How to use the component

**import and include the component**

```
import SbcAuthenticationOptionsDialog from 'sbc-common-components/src/components/SbcAuthenticationOptionsDialog.vue'

@Component({
  components: {
    SbcAuthenticationOptionsDialog
  }
})

 ```
 
 **use it in the template**


```
<template>
  <div>
    <SbcAuthenticationOptionsDialog></SbcAuthenticationOptionsDialog>
  </div>
</template>
```

***To display and close the dialog***


```
<template>
  <div>
    <SbcAuthenticationOptionsDialog
      :showModal="boolean"
      @close="closeMethod"
    ></SbcAuthenticationOptionsDialog>
  </div>
</template>
```

***If there is a redirect url once login is completed***


```
<template>
  <div>
    <SbcAuthenticationOptionsDialog
      :redirect-url="redirectUrlLink"
    ></SbcAuthenticationOptionsDialog>
  </div>
</template>
```
