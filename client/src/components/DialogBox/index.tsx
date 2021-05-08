import React, { FC, useState, useEffect, useRef } from 'react'
import { Dispatch, SetStateAction, RefObject } from 'react'
import cx from 'classnames'

import { IDialogContent, ILink } from '../../store/interfaces'

import styles from './styles.module.scss'

interface IProps {
  content: IDialogContent
}

type Ref = string | ((instance: HTMLElement | null) => void) | RefObject<HTMLDivElement> | null | undefined

const DialogBox: FC<IProps> = ({ content: { audio, links } }: IProps) => {
  const [isExpanded, setExpanded]: [boolean, Dispatch<SetStateAction<boolean>>] = useState<boolean>(false)
  const ref: Ref = useRef(null)
  const height: string = isExpanded ? `${ref?.current?.scrollHeight}px` : '0px'

  useEffect(() => {
    setExpanded(true)
  }, [])

  return (
    <>
      <div ref={ref} className={cx(styles.container, { [styles.expanded]: isExpanded })} style={{ maxHeight: height }}>
        <p className={styles.userPrompt}>{audio}</p>
      </div>
      {links.length > 0 ? (
        links.map((link: ILink) => {
          return (
            <div
              ref={ref}
              className={cx(styles.container, { [styles.expanded]: isExpanded })}
              style={{ maxHeight: height }}
              key={link.href}
            >
              <a href={link.href}>
                <p className={styles.responsePrompt}>{link.text}</p>
              </a>
            </div>
          )
        })
      ) : (
        <div
          ref={ref}
          className={cx(styles.container, { [styles.expanded]: isExpanded })}
          style={{ maxHeight: height }}
        >
          <p className={styles.responsePrompt}>Sorry, I couldn't quite catch that. Please try again</p>
        </div>
      )}
    </>
  )
}

export default DialogBox
