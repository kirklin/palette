import { field, logger } from "@kirklin/logger";

// copy text to clipboard
// 将文本复制到剪贴板
export function copyToClipboard(text: string) {
  // Try to use the navigator.clipboard.writeText method
  // 尝试使用navigator.clipboard.writeText方法
  void navigator.clipboard.writeText(text).then(() => {
    // Log the success message with the copied content
    // 记录成功信息和复制的内容
    logger.info("Copy Success", field("Content:", text));
  }).catch((error) => {
    // If there is an error, use the document.execCommand method as a fallback
    // 如果有错误，使用document.execCommand方法作为备选方案
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    const result = document.execCommand("copy");
    document.body.removeChild(textarea);
    if (!result) {
      logger.error("Copy Failed", field("Content:", text), field("Error:", error));
    } else {
      logger.info("Copy Success", field("Content:", text));
    }
  });
}
