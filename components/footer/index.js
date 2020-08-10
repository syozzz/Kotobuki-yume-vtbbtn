import { ContentBox } from '../common'
import styled from 'styled-components'

const Text = styled.div`
  font-size: 14px;
  margin-top: 5px;
  
  @media(max-width: 999px) {
    padding: 0 10px;
  }
`

const Footer = () => (
    <ContentBox style={{marginTop: '20px', marginBottom: '20px'}}>
        <Text>
            © 2020 &nbsp;
            <a href="https://space.bilibili.com/828754" target="_blank">
                请叫我椎名不白丶
            </a>
            &&nbsp;
            <a href="https://space.bilibili.com/84399544" target="_blank">
                琴吹夢甜品加工坊
            </a>
        </Text>
        <Text>
            Power by Vercel & next
        </Text>
        <Text>
            本站为爱好者作品，和琴吹梦官方没有关联，STAFF 名单以及项目参与方式请查看"关于"页面
        </Text>
    </ContentBox>
)



export default Footer