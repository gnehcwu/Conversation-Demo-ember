import Ember from 'ember';  
import Base from 'simple-auth/authorizers/base';

export default Base.extend({  
    authorize: function(jqXHR, requestOptions) {
        var accessToken = this.get('session.content.secure.token');
        if (this.get('session.isAuthenticated') && !Ember.isEmpty(accessToken)) {
            //  setRequestHeader方法自定义请求头信息：键为Authorization，值为Ember+accessToken
            jqXHR.setRequestHeader('Authorization', 'Ember' + accessToken);
        }
    }
});