import Head from 'next/head'
import { withTranslation } from '../i18n'
import { ContentBox } from '../components/common'
import { Table, Tag, Badge, Progress, Timeline } from 'antd'

const RoadMap = () => {

    const columns = [
        {
            title: '项目',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: '分类',
            dataIndex: 'tags',
            key: 'tags',
            render: tags => (
                <>
                    {tags.map(tag => {
                        let color = tag.length > 5 ? 'geekblue' : 'green';
                        if (tag === 'loser') {
                            color = 'volcano';
                        }
                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </>
            )
        },
        {
            title: '状态',
            dataIndex: 'status',
            key: 'status',
            render: status => {
                if (status === 0) {
                    return <Badge status="default" text="未开始"/>
                } else if (status === 1) {
                    return <Badge status="processing" text="进行中"/>
                }
            }
        },
        {
            title: '开发进度',
            dataIndex: 'progress',
            key: 'progress',
            render: pro => {
                return <Progress showInfo={false} percent={pro} size="small" />
            }
        }
    ]

    const data = [
        {
            id: '1',
            name: '评论重构为留言板功能',
            tags: ['新功能'],
            status: 1,
            progress: 5
        },
        {
            id: '2',
            name: '图集功能重构，用户可上传',
            tags: ['新功能', '工作量大'],
            status: 0,
            progress: 0
        },
        {
            id: '3',
            name: '音声添加',
            tags: ['持续'],
            status: 1,
            progress: 20
        }
    ]

    return (
        <>
            <Head>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport"/>
                <title>琴吹め / Yume Kotobuki 🍭 - roadmap</title>
            </Head>
            <ContentBox style={{padding: '10px'}}>
                <h4>todos</h4>
                <Table columns={columns} dataSource={data} rowKey="id" />
                <h4>更新记录</h4>
                <div style={{marginTop: '20px'}}>
                    <Timeline>
                        <Timeline.Item>2020-08-10</Timeline.Item>
                        <Timeline.Item>&emsp;去除了 zeit-ui 依赖，所有页面用 antd 重构 </Timeline.Item>
                        <Timeline.Item>&emsp;删除评论，twitter 查看功能</Timeline.Item>
                        <Timeline.Item>&emsp;图集页面修改页面布局，保证图片比例正常</Timeline.Item>
                        <Timeline.Item>&emsp;图集图片 view 功能改善，确保图片在屏幕范围内</Timeline.Item>
                        <Timeline.Item>2020-08-11</Timeline.Item>
                        <Timeline.Item>&emsp;第一批音声追加 </Timeline.Item>
                        <Timeline.Item>2020-08-12</Timeline.Item>
                        <Timeline.Item>&emsp;bilibili API 上线</Timeline.Item>
                        <Timeline.Item>&emsp;youtube API 上线</Timeline.Item>
                        <Timeline.Item>&emsp;showroom API 上线</Timeline.Item>
                    </Timeline>
                </div>
            </ContentBox>
        </>
    )

}

RoadMap.getInitialProps = async () => ({
    namespacesRequired: ['common', 'header']
})

export default withTranslation('common')(RoadMap)