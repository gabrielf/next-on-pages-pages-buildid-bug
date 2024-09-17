import {GetServerSidePropsContext} from 'next'
import React from 'react'

export const runtime = 'experimental-edge'

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    props: {
      locale: context.locale,
      renderedAt: new Date().toISOString(),
      nodeEnv: process.env.NODE_ENV,
    },
  }
}

type SSRProps = {
  locale: string
  renderedAt: string
  nodeEnv: string
};

export default function SSR({locale, renderedAt, nodeEnv}: SSRProps) {
  return (
    <div>
      <h1>Server-Side Rendering</h1>
      <p>
        Locale: <code data-testid="ssr-locale">{locale}</code>
      </p>
      <p>
        Rendered at: <code data-testid="ssr-rendered-at">{renderedAt}</code>
      </p>
      <p>
        Node env: <code data-testid="ssg-node-env">{nodeEnv}</code>
      </p>
    </div>
  )
}
