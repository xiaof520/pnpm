import { Component, PropsWithChildren } from 'react'
import { View, Text, Button } from '@tarojs/components'
import { AtButton, AtForm } from 'taro-ui'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.scss'

export default class Index extends Component<PropsWithChildren> {
  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  onFinish(values) {

  }

  render() {
    return (
      <View className='index'>
        <AtForm
          onSubmit={this.onFinish.bind(this)}
        >
          <Text>Hello world!</Text>
          <AtButton type='primary'>I need Taro UI</AtButton>
          <Text>Taro UI 支持 Vue 了吗？</Text>
          <AtButton type='primary' circle={true}>支持</AtButton>
          <Text>共建？</Text>
          <AtButton type='primary' formType='submit' circle={true}>AtButton</AtButton>
          <Button type='primary' formType='submit'>Button</Button>
        </AtForm>
      </View>
    )
  }
}
