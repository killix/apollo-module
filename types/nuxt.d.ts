/**
 * Extends interfaces in Nuxt
 */

import { VueApolloOptions } from 'vue-apollo/types/options'
import { ApolloClientClientConfig } from 'vue-cli-plugin-apollo/graphql-client'
import Vue, { ComponentOptions } from 'vue'
import { ApolloHelpers } from '.'

interface ApolloClientConfig extends ApolloClientClientConfig<any> {
  httpEndpoint: string
}

interface NuxtApolloConfiguration {
  tokenName?: string
  tokenExpires?: number
  includeNodeModules?: boolean
  authenticationType?: string
  errorHandler?: string
  defaultOptions?: VueApolloOptions<any>
  clientConfigs: {
    default: ApolloClientConfig | string
    [key: string]: ApolloClientConfig | string
  }
}

/*
declare module '@nuxt/config' {
  interface NuxtConfiguration {
    apollo?: NuxtApolloConfiguration
  }
}*/

declare module '@nuxt/vue-app' {
  interface NuxtAppOptions extends ComponentOptions<Vue> {
    $apolloHelpers: ApolloHelpers
  }
}

// Nuxt 2.9+
declare module '@nuxt/types' {
  interface Configuration {
    apollo?: NuxtApolloConfiguration
  }
  interface NuxtAppOptions extends ComponentOptions<Vue> {
    $apolloHelpers: ApolloHelpers
  }
}
