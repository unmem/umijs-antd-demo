import { Component } from 'react'
import { Layout, Menu, Icon, Button } from 'antd'
import Link from 'umi/link'
import { FormattedMessage, getLocale, setLocale } from 'umi/locale'

const { Header, Footer, Sider, Content } = Layout

const SubMenu = Menu.SubMenu

class BasicLayout extends Component {
  constructor(props) {
    super(props)
  }

  changLang() {
    const locale = getLocale()

    if (!locale || locale === 'zh-CN') {
      setLocale('en-US')
    } else {
      setLocale('zh-CN')
    }
  }

  render() {
    return (
      <Layout>
        <Sider width={256} style={{ minHeight: '100vh' }}>
          <div
            style={{
              height: '32px',
              background: 'rgba(255,255,255,.2)',
              margin: '16px',
            }}
          />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="helloworld">
              <Link to="/helloworld">
                <Icon type="pie-chart" />
                <span>Helloworld</span>
              </Link>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="dashboard" />
                  <span>Dashboard</span>
                </span>
              }
            >
              <Menu.Item key="analysis">
                <Link to="/dashboard/analysis">分析页</Link>
              </Menu.Item>
              <Menu.Item key="monitor">
                <Link to="/dashboard/monitor">监控页</Link>
              </Menu.Item>
              <Menu.Item key="workplace">
                <Link to="/dashboard/workplace">工作台</Link>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="list">
              <Link to="/list">
                <Icon type="ordered-list" />
                <span>List</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header
            style={{ background: '#fff', textAlign: 'center', padding: 0 }}
          >
            Header
            <Button
              size="small"
              onClick={() => {
                this.changLang()
              }}
            >
              <FormattedMessage id="lang" />
            </Button>
          </Header>
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    )
  }
}

export default BasicLayout
