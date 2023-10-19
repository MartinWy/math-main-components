import { SvgIcon } from 'components/SvgIcon';
import React from 'react';
import styles from './styles.module.scss';


export enum TableActionType {
    red,
    default
}


export class TableItem {

    public title: string;
    public subtitle: string;
    public moreText: string;
    public iconName: string;
    public data: any;

    constructor(title: string, subtitle: string, moreText: string, iconName: string, data: any = {}) {
        this.title = title;
        this.subtitle = subtitle;
        this.moreText = moreText;
        this.iconName = iconName;
        this.data = data;
    }
}

export class TableItemAction {

    public title: string
    public iconName: string
    public onClick: (event: any, item: TableItem, index: number) => void
    public type: TableActionType = TableActionType.default

    constructor(title: string, iconName: string, type: TableActionType, onClick: (event: any, item: TableItem, index: number) => void = () => { }) {
        this.title = title
        this.iconName = iconName
        this.onClick = onClick
        this.type = type
    }
}


export function Table({
    items,
    title = "Titel",
    actions = [],
    moreActions
}: {
    items: TableItem[],
    title: string,
    actions?: TableItemAction[],
    moreActions?: any[]
}) {

    return (
        <div className={styles.container}>
            <h3>{title}</h3>
            <ul className={`${styles.item_list} ${items.length > 0 ? styles.has_children : styles.no_children}`}>
                {items.map((item, index) =>
                    <li key={index} className={styles.item}>
                        <div className={styles.icon}>
                            <SvgIcon iconName={item.iconName} />
                        </div>
                        <div className={styles.title}>
                            {item.title}
                        </div>
                        <div className={styles.moreText}>
                            {item.moreText}
                        </div>
                        <div className={styles.subtitle}>
                            {item.subtitle}
                        </div>
                        {moreActions &&
                            moreActions.map((moreAction, index) =>
                                <div className={styles.more_action} key={item.title + index}>
                                    {moreAction(item.data, index)}
                                </div>
                            )
                        }
                        {actions.length > 0 && actions.map((action, idx) =>
                            <div
                                key={idx}
                                className={[
                                    styles.action,
                                    action.type == TableActionType.red && styles.red,
                                    action.type == TableActionType.default && styles.default,
                                ].join(" ")}
                                onClick={(event) => action.onClick(event, item, index)}>
                                <SvgIcon iconName={action.iconName} />
                                {action.title}
                            </div>
                        )}
                    </li>
                )}
            </ul>
        </div>
    )
}