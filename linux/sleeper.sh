#!/bin/bash

# 1. Цикл на 10 повторений с интервалом 5 секунд
for i in {1..10}
do
    # Получаем время в формате HH:MM:SS
    current_time=$(date +"%H:%M:%S")
    
    # Считаем количество процессов (минус заголовок команды ps)
    process_count=$(ps -ef | wc -l)
    process_count=$((process_count - 1))
    
    # Выводим результат в консоль
    echo "$current_time $process_count"
    
    # Временной интервал (для уменьшения/отключения измените цифру или поставьте # в начале строки)
    sleep 5
done

# 2. Запись информации о процессоре в файл
cat /proc/cpuinfo > cpu_info.txt

# 3. Фильтрация и запись чистого имени ОС в файл
# Находим строку с NAME, разделяем по знаку "=" и удаляем лишние кавычки
grep '^NAME=' /etc/os-release | awk -F= '{print $2}' | tr -d '"' > os_info.txt

# 4. Создание 50 файлов от 50.txt до 100.txt
for num in {50..100}
do
    touch "${num}.txt"
done
