!function(root,factory){if("object"==typeof exports&&"object"==typeof module)module.exports=factory(require("react"),require("react-native"));else if("function"==typeof define&&define.amd)define(["react","react-native"],factory);else{var a="object"==typeof exports?factory(require("react"),require("react-native")):factory(root.react,root["react-native"]);for(var i in a)("object"==typeof exports?exports:root)[i]=a[i]}}("undefined"!=typeof self?self:this,function(__WEBPACK_EXTERNAL_MODULE_1__,__WEBPACK_EXTERNAL_MODULE_2__){return function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}var installedModules={};return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{configurable:!1,enumerable:!0,get:getter})},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=9)}([function(module,exports){function defaultSetTimout(){throw new Error("setTimeout has not been defined")}function defaultClearTimeout(){throw new Error("clearTimeout has not been defined")}function runTimeout(fun){if(cachedSetTimeout===setTimeout)return setTimeout(fun,0);if((cachedSetTimeout===defaultSetTimout||!cachedSetTimeout)&&setTimeout)return cachedSetTimeout=setTimeout,setTimeout(fun,0);try{return cachedSetTimeout(fun,0)}catch(e){try{return cachedSetTimeout.call(null,fun,0)}catch(e){return cachedSetTimeout.call(this,fun,0)}}}function runClearTimeout(marker){if(cachedClearTimeout===clearTimeout)return clearTimeout(marker);if((cachedClearTimeout===defaultClearTimeout||!cachedClearTimeout)&&clearTimeout)return cachedClearTimeout=clearTimeout,clearTimeout(marker);try{return cachedClearTimeout(marker)}catch(e){try{return cachedClearTimeout.call(null,marker)}catch(e){return cachedClearTimeout.call(this,marker)}}}function cleanUpNextTick(){draining&&currentQueue&&(draining=!1,currentQueue.length?queue=currentQueue.concat(queue):queueIndex=-1,queue.length&&drainQueue())}function drainQueue(){if(!draining){var timeout=runTimeout(cleanUpNextTick);draining=!0;for(var len=queue.length;len;){for(currentQueue=queue,queue=[];++queueIndex<len;)currentQueue&&currentQueue[queueIndex].run();queueIndex=-1,len=queue.length}currentQueue=null,draining=!1,runClearTimeout(timeout)}}function Item(fun,array){this.fun=fun,this.array=array}function noop(){}var cachedSetTimeout,cachedClearTimeout,process=module.exports={};!function(){try{cachedSetTimeout="function"==typeof setTimeout?setTimeout:defaultSetTimout}catch(e){cachedSetTimeout=defaultSetTimout}try{cachedClearTimeout="function"==typeof clearTimeout?clearTimeout:defaultClearTimeout}catch(e){cachedClearTimeout=defaultClearTimeout}}();var currentQueue,queue=[],draining=!1,queueIndex=-1;process.nextTick=function(fun){var args=new Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)args[i-1]=arguments[i];queue.push(new Item(fun,args)),1!==queue.length||draining||runTimeout(drainQueue)},Item.prototype.run=function(){this.fun.apply(null,this.array)},process.title="browser",process.browser=!0,process.env={},process.argv=[],process.version="",process.versions={},process.on=noop,process.addListener=noop,process.once=noop,process.off=noop,process.removeListener=noop,process.removeAllListeners=noop,process.emit=noop,process.prependListener=noop,process.prependOnceListener=noop,process.listeners=function(name){return[]},process.binding=function(name){throw new Error("process.binding is not supported")},process.cwd=function(){return"/"},process.chdir=function(dir){throw new Error("process.chdir is not supported")},process.umask=function(){return 0}},function(module,exports){module.exports=__WEBPACK_EXTERNAL_MODULE_1__},function(module,exports){module.exports=__WEBPACK_EXTERNAL_MODULE_2__},function(module,exports,__webpack_require__){(function(process){if("production"!==process.env.NODE_ENV){var REACT_ELEMENT_TYPE="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,isValidElement=function(object){return"object"==typeof object&&null!==object&&object.$$typeof===REACT_ELEMENT_TYPE};module.exports=__webpack_require__(11)(isValidElement,!0)}else module.exports=__webpack_require__(14)()}).call(exports,__webpack_require__(0))},function(module,exports,__webpack_require__){"use strict";function makeEmptyFunction(arg){return function(){return arg}}var emptyFunction=function(){};emptyFunction.thatReturns=makeEmptyFunction,emptyFunction.thatReturnsFalse=makeEmptyFunction(!1),emptyFunction.thatReturnsTrue=makeEmptyFunction(!0),emptyFunction.thatReturnsNull=makeEmptyFunction(null),emptyFunction.thatReturnsThis=function(){return this},emptyFunction.thatReturnsArgument=function(arg){return arg},module.exports=emptyFunction},function(module,exports,__webpack_require__){"use strict";(function(process){function invariant(condition,format,a,b,c,d,e,f){if(validateFormat(format),!condition){var error;if(void 0===format)error=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var args=[a,b,c,d,e,f],argIndex=0;error=new Error(format.replace(/%s/g,function(){return args[argIndex++]})),error.name="Invariant Violation"}throw error.framesToPop=1,error}}var validateFormat=function(format){};"production"!==process.env.NODE_ENV&&(validateFormat=function(format){if(void 0===format)throw new Error("invariant requires an error message argument")}),module.exports=invariant}).call(exports,__webpack_require__(0))},function(module,exports,__webpack_require__){"use strict";module.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(module,exports,__webpack_require__){"use strict";(function(process){var emptyFunction=__webpack_require__(4),warning=emptyFunction;if("production"!==process.env.NODE_ENV){var printWarning=function(format){for(var _len=arguments.length,args=Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)args[_key-1]=arguments[_key];var argIndex=0,message="Warning: "+format.replace(/%s/g,function(){return args[argIndex++]});"undefined"!=typeof console&&console.error(message);try{throw new Error(message)}catch(x){}};warning=function(condition,format){if(void 0===format)throw new Error("`warning(condition, format, ...args)` requires a warning message argument");if(0!==format.indexOf("Failed Composite propType: ")&&!condition){for(var _len2=arguments.length,args=Array(_len2>2?_len2-2:0),_key2=2;_key2<_len2;_key2++)args[_key2-2]=arguments[_key2];printWarning.apply(void 0,[format].concat(args))}}}module.exports=warning}).call(exports,__webpack_require__(0))},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj)keys.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(obj,i)&&(target[i]=obj[i]);return target}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_react=__webpack_require__(1),_react2=_interopRequireDefault(_react),_reactNative=__webpack_require__(2),_propTypes=__webpack_require__(3),_propTypes2=_interopRequireDefault(_propTypes),Text=function(_Component){function Text(){var _ref,_temp,_this,_ret;_classCallCheck(this,Text);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _temp=_this=_possibleConstructorReturn(this,(_ref=Text.__proto__||Object.getPrototypeOf(Text)).call.apply(_ref,[this].concat(args))),_this.setNativeProps=function(nativeProps){_this._root.setNativeProps(nativeProps)},_ret=_temp,_possibleConstructorReturn(_this,_ret)}return _inherits(Text,_Component),_createClass(Text,[{key:"render",value:function(){var _this2=this,_props=this.props,children=_props.children,size=_props.size,style=_props.style,weight=_props.weight,uppercase=_props.uppercase,props=_objectWithoutProperties(_props,["children","size","style","weight","uppercase"]),textStyles=[styles[size],styles[weight]],textBody=children;return style&&textStyles.push(style),children&&uppercase&&(textBody=children.toUpperCase()),_react2.default.createElement(_reactNative.Text,_extends({ref:function(component){return _this2._root=component},style:textStyles},props),textBody)}}]),Text}(_react.Component);Text.propTypes={size:_propTypes2.default.oneOfType([_propTypes2.default.string,_propTypes2.default.number]),weight:_propTypes2.default.oneOf(["light","normal","medium","semibold","bold","black"]),uppercase:_propTypes2.default.bool},Text.defaultProps={size:3,weight:"normal",uppercase:!1},exports.default=Text;var styles=_reactNative.StyleSheet.create({1:{fontSize:11},2:{fontSize:13},3:{fontSize:15},4:{fontSize:17},5:{fontSize:19},6:{fontSize:24},7:{fontSize:30},8:{fontSize:36},9:{fontSize:42},10:{fontSize:51},11:{fontSize:60},light:{fontWeight:"300"},normal:{fontWeight:"400"},medium:{fontWeight:"500"},semibold:{fontWeight:"600"},bold:{fontWeight:"700"},black:{fontWeight:"900"}})},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.Text=exports.Spacer=exports.Button=void 0;var _Button2=__webpack_require__(10),_Button3=_interopRequireDefault(_Button2),_Spacer2=__webpack_require__(15),_Spacer3=_interopRequireDefault(_Spacer2),_Text2=__webpack_require__(8),_Text3=_interopRequireDefault(_Text2);exports.Button=_Button3.default,exports.Spacer=_Spacer3.default,exports.Text=_Text3.default},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj)keys.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(obj,i)&&(target[i]=obj[i]);return target}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_react=__webpack_require__(1),_react2=_interopRequireDefault(_react),_reactNative=__webpack_require__(2),_propTypes=__webpack_require__(3),_propTypes2=_interopRequireDefault(_propTypes),_Text=__webpack_require__(8),_Text2=_interopRequireDefault(_Text),Button=function(_Component){function Button(){var _ref,_temp,_this,_ret;_classCallCheck(this,Button);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _temp=_this=_possibleConstructorReturn(this,(_ref=Button.__proto__||Object.getPrototypeOf(Button)).call.apply(_ref,[this].concat(args))),_this.setNativeProps=function(nativeProps){_this._root.setNativeProps(nativeProps)},_ret=_temp,_possibleConstructorReturn(_this,_ret)}return _inherits(Button,_Component),_createClass(Button,[{key:"render",value:function(){var _this2=this,_props=this.props,format=_props.format,name=_props.name,onPress=_props.onPress,props=_objectWithoutProperties(_props,["format","name","onPress"]),buttonStyles=[style.button,style[format]],buttonText=name;return _react2.default.createElement(_reactNative.TouchableOpacity,{onPress:onPress},_react2.default.createElement(_reactNative.View,_extends({ref:function(component){return _this2._root=component},style:buttonStyles},props),_react2.default.createElement(_Text2.default,{style:{color:"rgba(208, 188, 149, 1)"},uppercase:!0},buttonText)))}}]),Button}(_react.Component);Button.propTypes={format:_propTypes2.default.oneOf(["fill","outline","plain"]),name:_propTypes2.default.string,onPress:_propTypes2.default.func},Button.defaultProps={format:"fill",name:null,onPress:function(){}},exports.default=Button;var style=_reactNative.StyleSheet.create({button:{justifyContent:"center",alignItems:"center",padding:12},fill:{backgroundColor:"rgba(208, 188, 149, 0.2)"},outline:{borderColor:"rgba(208, 188, 149, 0.5)",borderWidth:2,borderRadius:8},plain:{backgroundColor:"none"}})},function(module,exports,__webpack_require__){"use strict";(function(process){var emptyFunction=__webpack_require__(4),invariant=__webpack_require__(5),warning=__webpack_require__(7),assign=__webpack_require__(12),ReactPropTypesSecret=__webpack_require__(6),checkPropTypes=__webpack_require__(13);module.exports=function(isValidElement,throwOnDirectAccess){function getIteratorFn(maybeIterable){var iteratorFn=maybeIterable&&(ITERATOR_SYMBOL&&maybeIterable[ITERATOR_SYMBOL]||maybeIterable[FAUX_ITERATOR_SYMBOL]);if("function"==typeof iteratorFn)return iteratorFn}function is(x,y){return x===y?0!==x||1/x==1/y:x!==x&&y!==y}function PropTypeError(message){this.message=message,this.stack=""}function createChainableTypeChecker(validate){function checkType(isRequired,props,propName,componentName,location,propFullName,secret){if(componentName=componentName||ANONYMOUS,propFullName=propFullName||propName,secret!==ReactPropTypesSecret)if(throwOnDirectAccess)invariant(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");else if("production"!==process.env.NODE_ENV&&"undefined"!=typeof console){var cacheKey=componentName+":"+propName;!manualPropTypeCallCache[cacheKey]&&manualPropTypeWarningCount<3&&(warning(!1,"You are manually calling a React.PropTypes validation function for the `%s` prop on `%s`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.",propFullName,componentName),manualPropTypeCallCache[cacheKey]=!0,manualPropTypeWarningCount++)}return null==props[propName]?isRequired?new PropTypeError(null===props[propName]?"The "+location+" `"+propFullName+"` is marked as required in `"+componentName+"`, but its value is `null`.":"The "+location+" `"+propFullName+"` is marked as required in `"+componentName+"`, but its value is `undefined`."):null:validate(props,propName,componentName,location,propFullName)}if("production"!==process.env.NODE_ENV)var manualPropTypeCallCache={},manualPropTypeWarningCount=0;var chainedCheckType=checkType.bind(null,!1);return chainedCheckType.isRequired=checkType.bind(null,!0),chainedCheckType}function createPrimitiveTypeChecker(expectedType){function validate(props,propName,componentName,location,propFullName,secret){var propValue=props[propName];if(getPropType(propValue)!==expectedType)return new PropTypeError("Invalid "+location+" `"+propFullName+"` of type `"+getPreciseType(propValue)+"` supplied to `"+componentName+"`, expected `"+expectedType+"`.");return null}return createChainableTypeChecker(validate)}function createArrayOfTypeChecker(typeChecker){function validate(props,propName,componentName,location,propFullName){if("function"!=typeof typeChecker)return new PropTypeError("Property `"+propFullName+"` of component `"+componentName+"` has invalid PropType notation inside arrayOf.");var propValue=props[propName];if(!Array.isArray(propValue)){return new PropTypeError("Invalid "+location+" `"+propFullName+"` of type `"+getPropType(propValue)+"` supplied to `"+componentName+"`, expected an array.")}for(var i=0;i<propValue.length;i++){var error=typeChecker(propValue,i,componentName,location,propFullName+"["+i+"]",ReactPropTypesSecret);if(error instanceof Error)return error}return null}return createChainableTypeChecker(validate)}function createInstanceTypeChecker(expectedClass){function validate(props,propName,componentName,location,propFullName){if(!(props[propName]instanceof expectedClass)){var expectedClassName=expectedClass.name||ANONYMOUS;return new PropTypeError("Invalid "+location+" `"+propFullName+"` of type `"+getClassName(props[propName])+"` supplied to `"+componentName+"`, expected instance of `"+expectedClassName+"`.")}return null}return createChainableTypeChecker(validate)}function createEnumTypeChecker(expectedValues){function validate(props,propName,componentName,location,propFullName){for(var propValue=props[propName],i=0;i<expectedValues.length;i++)if(is(propValue,expectedValues[i]))return null;return new PropTypeError("Invalid "+location+" `"+propFullName+"` of value `"+propValue+"` supplied to `"+componentName+"`, expected one of "+JSON.stringify(expectedValues)+".")}return Array.isArray(expectedValues)?createChainableTypeChecker(validate):("production"!==process.env.NODE_ENV&&warning(!1,"Invalid argument supplied to oneOf, expected an instance of array."),emptyFunction.thatReturnsNull)}function createObjectOfTypeChecker(typeChecker){function validate(props,propName,componentName,location,propFullName){if("function"!=typeof typeChecker)return new PropTypeError("Property `"+propFullName+"` of component `"+componentName+"` has invalid PropType notation inside objectOf.");var propValue=props[propName],propType=getPropType(propValue);if("object"!==propType)return new PropTypeError("Invalid "+location+" `"+propFullName+"` of type `"+propType+"` supplied to `"+componentName+"`, expected an object.");for(var key in propValue)if(propValue.hasOwnProperty(key)){var error=typeChecker(propValue,key,componentName,location,propFullName+"."+key,ReactPropTypesSecret);if(error instanceof Error)return error}return null}return createChainableTypeChecker(validate)}function createUnionTypeChecker(arrayOfTypeCheckers){function validate(props,propName,componentName,location,propFullName){for(var i=0;i<arrayOfTypeCheckers.length;i++){if(null==(0,arrayOfTypeCheckers[i])(props,propName,componentName,location,propFullName,ReactPropTypesSecret))return null}return new PropTypeError("Invalid "+location+" `"+propFullName+"` supplied to `"+componentName+"`.")}if(!Array.isArray(arrayOfTypeCheckers))return"production"!==process.env.NODE_ENV&&warning(!1,"Invalid argument supplied to oneOfType, expected an instance of array."),emptyFunction.thatReturnsNull;for(var i=0;i<arrayOfTypeCheckers.length;i++){var checker=arrayOfTypeCheckers[i];if("function"!=typeof checker)return warning(!1,"Invalid argument supplied to oneOfType. Expected an array of check functions, but received %s at index %s.",getPostfixForTypeWarning(checker),i),emptyFunction.thatReturnsNull}return createChainableTypeChecker(validate)}function createShapeTypeChecker(shapeTypes){function validate(props,propName,componentName,location,propFullName){var propValue=props[propName],propType=getPropType(propValue);if("object"!==propType)return new PropTypeError("Invalid "+location+" `"+propFullName+"` of type `"+propType+"` supplied to `"+componentName+"`, expected `object`.");for(var key in shapeTypes){var checker=shapeTypes[key];if(checker){var error=checker(propValue,key,componentName,location,propFullName+"."+key,ReactPropTypesSecret);if(error)return error}}return null}return createChainableTypeChecker(validate)}function createStrictShapeTypeChecker(shapeTypes){function validate(props,propName,componentName,location,propFullName){var propValue=props[propName],propType=getPropType(propValue);if("object"!==propType)return new PropTypeError("Invalid "+location+" `"+propFullName+"` of type `"+propType+"` supplied to `"+componentName+"`, expected `object`.");var allKeys=assign({},props[propName],shapeTypes);for(var key in allKeys){var checker=shapeTypes[key];if(!checker)return new PropTypeError("Invalid "+location+" `"+propFullName+"` key `"+key+"` supplied to `"+componentName+"`.\nBad object: "+JSON.stringify(props[propName],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(shapeTypes),null,"  "));var error=checker(propValue,key,componentName,location,propFullName+"."+key,ReactPropTypesSecret);if(error)return error}return null}return createChainableTypeChecker(validate)}function isNode(propValue){switch(typeof propValue){case"number":case"string":case"undefined":return!0;case"boolean":return!propValue;case"object":if(Array.isArray(propValue))return propValue.every(isNode);if(null===propValue||isValidElement(propValue))return!0;var iteratorFn=getIteratorFn(propValue);if(!iteratorFn)return!1;var step,iterator=iteratorFn.call(propValue);if(iteratorFn!==propValue.entries){for(;!(step=iterator.next()).done;)if(!isNode(step.value))return!1}else for(;!(step=iterator.next()).done;){var entry=step.value;if(entry&&!isNode(entry[1]))return!1}return!0;default:return!1}}function isSymbol(propType,propValue){return"symbol"===propType||("Symbol"===propValue["@@toStringTag"]||"function"==typeof Symbol&&propValue instanceof Symbol)}function getPropType(propValue){var propType=typeof propValue;return Array.isArray(propValue)?"array":propValue instanceof RegExp?"object":isSymbol(propType,propValue)?"symbol":propType}function getPreciseType(propValue){if(void 0===propValue||null===propValue)return""+propValue;var propType=getPropType(propValue);if("object"===propType){if(propValue instanceof Date)return"date";if(propValue instanceof RegExp)return"regexp"}return propType}function getPostfixForTypeWarning(value){var type=getPreciseType(value);switch(type){case"array":case"object":return"an "+type;case"boolean":case"date":case"regexp":return"a "+type;default:return type}}function getClassName(propValue){return propValue.constructor&&propValue.constructor.name?propValue.constructor.name:ANONYMOUS}var ITERATOR_SYMBOL="function"==typeof Symbol&&Symbol.iterator,FAUX_ITERATOR_SYMBOL="@@iterator",ANONYMOUS="<<anonymous>>",ReactPropTypes={array:createPrimitiveTypeChecker("array"),bool:createPrimitiveTypeChecker("boolean"),func:createPrimitiveTypeChecker("function"),number:createPrimitiveTypeChecker("number"),object:createPrimitiveTypeChecker("object"),string:createPrimitiveTypeChecker("string"),symbol:createPrimitiveTypeChecker("symbol"),any:function(){return createChainableTypeChecker(emptyFunction.thatReturnsNull)}(),arrayOf:createArrayOfTypeChecker,element:function(){function validate(props,propName,componentName,location,propFullName){var propValue=props[propName];if(!isValidElement(propValue)){return new PropTypeError("Invalid "+location+" `"+propFullName+"` of type `"+getPropType(propValue)+"` supplied to `"+componentName+"`, expected a single ReactElement.")}return null}return createChainableTypeChecker(validate)}(),instanceOf:createInstanceTypeChecker,node:function(){function validate(props,propName,componentName,location,propFullName){return isNode(props[propName])?null:new PropTypeError("Invalid "+location+" `"+propFullName+"` supplied to `"+componentName+"`, expected a ReactNode.")}return createChainableTypeChecker(validate)}(),objectOf:createObjectOfTypeChecker,oneOf:createEnumTypeChecker,oneOfType:createUnionTypeChecker,shape:createShapeTypeChecker,exact:createStrictShapeTypeChecker};return PropTypeError.prototype=Error.prototype,ReactPropTypes.checkPropTypes=checkPropTypes,ReactPropTypes.PropTypes=ReactPropTypes,ReactPropTypes}}).call(exports,__webpack_require__(0))},function(module,exports,__webpack_require__){"use strict";function toObject(val){if(null===val||void 0===val)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(val)}/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var getOwnPropertySymbols=Object.getOwnPropertySymbols,hasOwnProperty=Object.prototype.hasOwnProperty,propIsEnumerable=Object.prototype.propertyIsEnumerable;module.exports=function(){try{if(!Object.assign)return!1;var test1=new String("abc");if(test1[5]="de","5"===Object.getOwnPropertyNames(test1)[0])return!1;for(var test2={},i=0;i<10;i++)test2["_"+String.fromCharCode(i)]=i;if("0123456789"!==Object.getOwnPropertyNames(test2).map(function(n){return test2[n]}).join(""))return!1;var test3={};return"abcdefghijklmnopqrst".split("").forEach(function(letter){test3[letter]=letter}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},test3)).join("")}catch(err){return!1}}()?Object.assign:function(target,source){for(var from,symbols,to=toObject(target),s=1;s<arguments.length;s++){from=Object(arguments[s]);for(var key in from)hasOwnProperty.call(from,key)&&(to[key]=from[key]);if(getOwnPropertySymbols){symbols=getOwnPropertySymbols(from);for(var i=0;i<symbols.length;i++)propIsEnumerable.call(from,symbols[i])&&(to[symbols[i]]=from[symbols[i]])}}return to}},function(module,exports,__webpack_require__){"use strict";(function(process){function checkPropTypes(typeSpecs,values,location,componentName,getStack){if("production"!==process.env.NODE_ENV)for(var typeSpecName in typeSpecs)if(typeSpecs.hasOwnProperty(typeSpecName)){var error;try{invariant("function"==typeof typeSpecs[typeSpecName],"%s: %s type `%s` is invalid; it must be a function, usually from the `prop-types` package, but received `%s`.",componentName||"React class",location,typeSpecName,typeof typeSpecs[typeSpecName]),error=typeSpecs[typeSpecName](values,typeSpecName,componentName,location,null,ReactPropTypesSecret)}catch(ex){error=ex}if(warning(!error||error instanceof Error,"%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",componentName||"React class",location,typeSpecName,typeof error),error instanceof Error&&!(error.message in loggedTypeFailures)){loggedTypeFailures[error.message]=!0;var stack=getStack?getStack():"";warning(!1,"Failed %s type: %s%s",location,error.message,null!=stack?stack:"")}}}if("production"!==process.env.NODE_ENV)var invariant=__webpack_require__(5),warning=__webpack_require__(7),ReactPropTypesSecret=__webpack_require__(6),loggedTypeFailures={};module.exports=checkPropTypes}).call(exports,__webpack_require__(0))},function(module,exports,__webpack_require__){"use strict";var emptyFunction=__webpack_require__(4),invariant=__webpack_require__(5),ReactPropTypesSecret=__webpack_require__(6);module.exports=function(){function shim(props,propName,componentName,location,propFullName,secret){secret!==ReactPropTypesSecret&&invariant(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function getShim(){return shim}shim.isRequired=shim;var ReactPropTypes={array:shim,bool:shim,func:shim,number:shim,object:shim,string:shim,symbol:shim,any:shim,arrayOf:getShim,element:shim,instanceOf:getShim,node:shim,objectOf:getShim,oneOf:getShim,oneOfType:getShim,shape:getShim,exact:getShim};return ReactPropTypes.checkPropTypes=emptyFunction,ReactPropTypes.PropTypes=ReactPropTypes,ReactPropTypes}},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(1),_react2=_interopRequireDefault(_react),_reactNative=__webpack_require__(2),_propTypes=__webpack_require__(3),_propTypes2=_interopRequireDefault(_propTypes),Spacer=function(_ref){var size=_ref.size,spacerHeight=6*size;return _react2.default.createElement(_reactNative.View,{style:{width:"100%",height:spacerHeight}})};Spacer.propTypes={size:_propTypes2.default.oneOfType([_propTypes2.default.string,_propTypes2.default.number]).isRequired},exports.default=Spacer}])});
//# sourceMappingURL=index.js.map