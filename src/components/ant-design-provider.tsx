import { ConfigProvider, theme as antdTheme } from "antd"
import { useTheme } from "./theme-provider"

export function AntDProvider({ children }: { children: React.ReactNode }) {
  const { theme, systemTheme } = useTheme()
  const effectiveTheme = theme === "system" ? systemTheme : theme

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#037f85',
        },
        algorithm: effectiveTheme === "dark"
          ? antdTheme.darkAlgorithm
          : antdTheme.defaultAlgorithm,
      }}
    >
      <div className={effectiveTheme}>
        {children}
      </div>
    </ConfigProvider>
  )
}