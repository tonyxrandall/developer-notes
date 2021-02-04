(window.webpackJsonp=window.webpackJsonp||[]).push([[536],{"3oxJ":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return l}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var a=n("/FXl"),o=n("TjRS");n("aD51");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var r={};void 0!==r&&r&&r===Object(r)&&Object.isExtensible(r)&&!r.hasOwnProperty("__filemeta")&&Object.defineProperty(r,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/React-Native/React-Native-iBeacon.md"}});var c={_frontmatter:r},s=o.a;function l(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(a.b)(s,i({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"react-native-ibeacon"},"React Native iBeacon"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#react-native-ibeacon"}),"React Native iBeacon"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#react-native-beacons-manager"}),"react-native-beacons-manager"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#any-things-we-dont-understand-about-their-docs"}),"Any things we don’t understand about their docs?")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#any-technical-concerns"}),"Any technical concerns?")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#why-should-we-use-this-technology"}),"Why should we use this technology?")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#why-shouldnt-we-use-this-technology"}),"Why shouldn’t we use this technology?")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#are-there-alternatives"}),"Are there alternatives?")))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#install"}),"Install")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#setup"}),"Setup"))))),Object(a.b)("h2",{id:"react-native-beacons-manager"},"react-native-beacons-manager"),Object(a.b)("p",null,Object(a.b)("a",i({parentName:"p"},{href:"https://github.com/MacKentoch/react-native-beacons-manager"}),"https://github.com/MacKentoch/react-native-beacons-manager")),Object(a.b)("h3",{id:"any-things-we-dont-understand-about-their-docs"},"Any things we don’t understand about their docs?"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Documentation seems okay")),Object(a.b)("h3",{id:"any-technical-concerns"},"Any technical concerns?"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Either library being outdated")),Object(a.b)("h3",{id:"why-should-we-use-this-technology"},"Why should we use this technology?"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Based off the ports of the original beacon packages"),Object(a.b)("li",{parentName:"ul"},"Easy to test with what we have"),Object(a.b)("li",{parentName:"ul"},"Easier to setup push notification logic")),Object(a.b)("h3",{id:"why-shouldnt-we-use-this-technology"},"Why shouldn’t we use this technology?"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Small, open-source project")),Object(a.b)("h3",{id:"are-there-alternatives"},"Are there alternatives?"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"See above")),Object(a.b)("h2",{id:"install"},"Install"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{}),"react-native init\nyarn add react-native-beacons-manager\nyarn add react-native-bluetooth-state\nreact-native link\n# potential error on RCBridge requires you to comment it out\n")),Object(a.b)("h2",{id:"setup"},"Setup"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-javascript"}),"import React, { Component } from 'react';\nimport {\n    AppRegistry,\n    StyleSheet,\n    View,\n    Text,\n    ListView,\n    DeviceEventEmitter\n} from 'react-native';\nimport Beacons from 'react-native-beacons-manager';\nimport BluetoothState from 'react-native-bluetooth-state';\n\nexport default class ibeacon extends Component {\n    constructor(props) {\n        super(props);\n        // Create our dataSource which will be displayed in the ListView\n        var ds = new ListView.DataSource({\n            rowHasChanged: (r1, r2) => r1 !== r2\n        });\n        this.state = {\n            bluetoothState: '',\n            // region information\n            identifier: 'Test',\n            uuid: '5A4BCFCE-174E-4BAC-A814-092E77F6B7E5',\n            // React Native ListView datasource initialization\n            dataSource: ds.cloneWithRows([])\n        };\n    }\n\n    componentWillMount() {\n        //\n        // ONLY non component state aware here in componentWillMount\n        //\n        // Request for authorization while the app is open\n        Beacons.requestWhenInUseAuthorization();\n        // Define a region which can be identifier + uuid,\n        // identifier + uuid + major or identifier + uuid + major + minor\n        // (minor and major properties are numbers)\n        const region = {\n            identifier: this.state.identifier,\n            uuid: this.state.uuid\n        };\n        // Range for beacons inside the region\n        Beacons.startRangingBeaconsInRegion(region);\n        // Beacons.startUpdatingLocation();\n    }\n\n    componentDidMount() {\n        //\n        // component state aware here - attach events\n        //\n        // Ranging: Listen for beacon changes\n        this.beaconsDidRange = DeviceEventEmitter.addListener(\n            'beaconsDidRange',\n            (data) => {\n                this.setState({\n                    dataSource: this.state.dataSource.cloneWithRows(\n                        data.beacons\n                    )\n                });\n            }\n        );\n\n        // listen bluetooth state change event\n        BluetoothState.subscribe((bluetoothState) => {\n            this.setState({ bluetoothState: bluetoothState });\n        });\n        BluetoothState.initialize();\n    }\n\n    componentWillUnMount() {\n        this.beaconsDidRange = null;\n    }\n\n    render() {\n        const { bluetoothState, dataSource } = this.state;\n        return (\n            <View style={styles.container}>\n                <Text style={styles.btleConnectionStatus}>\n                    Bluetooth connection status:{' '}\n                    {bluetoothState ? bluetoothState : 'NA'}\n                </Text>\n                <Text style={styles.headline}>All beacons in the area</Text>\n                <ListView\n                    dataSource={dataSource}\n                    enableEmptySections={true}\n                    renderRow={this.renderRow}\n                />\n            </View>\n        );\n    }\n\n    renderRow = (rowData) => {\n        return (\n            <View style={styles.row}>\n                <Text style={styles.smallText}>\n                    UUID: {rowData.uuid ? rowData.uuid : 'NA'}\n                </Text>\n                <Text style={styles.smallText}>\n                    Major: {rowData.major ? rowData.major : 'NA'}\n                </Text>\n                <Text style={styles.smallText}>\n                    Minor: {rowData.minor ? rowData.minor : 'NA'}\n                </Text>\n                <Text>RSSI: {rowData.rssi ? rowData.rssi : 'NA'}</Text>\n                <Text>\n                    Proximity: {rowData.proximity ? rowData.proximity : 'NA'}\n                </Text>\n                <Text>\n                    Distance:{' '}\n                    {rowData.accuracy ? rowData.accuracy.toFixed(2) : 'NA'}m\n                </Text>\n            </View>\n        );\n    };\n}\n\nconst styles = StyleSheet.create({\n    container: {\n        flex: 1,\n        paddingTop: 60,\n        justifyContent: 'center',\n        alignItems: 'center',\n        backgroundColor: '#F5FCFF'\n    },\n    btleConnectionStatus: {\n        fontSize: 20,\n        paddingTop: 20\n    },\n    headline: {\n        fontSize: 20,\n        paddingTop: 20\n    },\n    row: {\n        padding: 8,\n        paddingBottom: 16\n    },\n    smallText: {\n        fontSize: 11\n    }\n});\n\nAppRegistry.registerComponent('ibeacon', () => ibeacon);\n")))}l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/React-Native/React-Native-iBeacon.md"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-react-native-react-native-i-beacon-md-3709f75d1bfc24736f21.js.map