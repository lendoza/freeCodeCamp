function end(str, target) {
   return target === str.substr(str.length - target.length);
}

end('Bastian', 'n');