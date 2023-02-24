import React from 'react'

export type User = {
    id: string
    isDeveloper?: boolean
    devices?: number
    sessions?: Array<any>
    location?: string
    created?: Date
    channels?: {
        push: boolean,
        email: boolean,
        webhook: boolean,
        appInbox: boolean
    }
    attributes?: Record<string, any>
    events?: number
    bucket?: number
    onClickHandler: React.MouseEventHandler<HTMLElement>
}

export type UsersWidgetProps = {
    title: string
    subtitle: string,
    data: Array<any>
}
