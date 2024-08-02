import 'vuetify/styles'
import {createVuetify} from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';


export default createVuetify({
    // components 는 vuetify 에서 사용할 수 있는 UI 컴포넌트들을 의미한다.
    // directives 는 vuetify 에서 HTML 요소에 행동을 부여하는데 사용.
    components, 
    directives
});