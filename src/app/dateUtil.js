// Util
// 날짜 객체를 인자로 받아서 문장으로 반환해주는 함수 (yyyy-MM-dd hh:mm:ss)
export default function dateToStr(d) {
  const pad = (n) => {
    return n < 10 ? '0' + n : n;
  };
  return (
    d.getFullYear() +
    '-' +
    pad(d.getMonth() + 1) +
    '-' +
    pad(d.getDate()) +
    ' ' +
    pad(d.getHours()) +
    ':' +
    pad(d.getMinutes()) +
    ':' +
    pad(d.getSeconds())
  );
}
