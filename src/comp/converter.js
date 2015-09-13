/**
 * 该文件用于定义值的过滤转换器
 *
 */
// ============================================================
/**
 * 转换为大写形式
 * eg: <p>${name | upper}</p>
 */
export class UpperValueConverter {
    toView(value) {
        return value && value.toUpperCase();
    }
}

/**
 * 转换为小写形式
 * eg: <p>${name | lower}</p>
 */
export class LowerValueConverter {
    toView(value) {
        return value && value.toLowerCase();
    }
}

/**
 * 限制字符串的最大显示长度
 * eg: <p>${name | abbreviate:10}</p>
 */
export class AbbreviateValueConverter {
    toView(value, p) {

        if (value && p && (value.length > p)) {
            return value.substr(0, p - 3) + '...';
        }

        return value;
    }
}

export class AbbValueConverter {
    toView(value, p1, p2) {

        return value;
    }
}