#!/bin/bash

# Перебираем все файлы в папке dir1
for file in /opt/100726-wdm/kostiantyn.heiko/dir1/*; do
    # Получаем только имя файла без пути
    filename=$(basename "$file")
    
    # Проверяем, является ли имя числом и делится ли оно на 2 без остатка
    if [[ "$filename" =~ ^[0-9]+$ ]] && (( filename % 2 == 0 )); then
        mv "$file" /opt/100726-wdm/kostiantyn.heiko/dir2/
    fi
done

